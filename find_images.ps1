$publicDir = "c:\Users\vivekvkraj\OneDrive\Desktop\WNcoders\wncoders\public"
$searchDir = "c:\Users\vivekvkraj\OneDrive\Desktop\WNcoders\wncoders"
$files = Get-ChildItem -Path $publicDir -File
$codeFiles = Get-ChildItem -Path "$searchDir\app", "$searchDir\components" -Recurse -Include *.tsx,*.ts,*.css -ErrorAction SilentlyContinue

$used = @()
$unused = @()

foreach ($file in $files) {
    $name = [Regex]::Escape($file.Name)
    $found = $codeFiles | Select-String -Pattern $name -Quiet
    if ($found) {
        $used += $file.Name
    } else {
        $unused += $file.Name
    }
}
Write-Output "=== USED ==="
$used
Write-Output "=== UNUSED ==="
$unused
