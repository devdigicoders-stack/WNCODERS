$publicDir = "c:\Users\vivekvkraj\OneDrive\Desktop\WNcoders\wncoders\public"
$searchDir = "c:\Users\vivekvkraj\OneDrive\Desktop\WNcoders\wncoders"

$files = Get-ChildItem -Path $publicDir -File -Include *.png,*.jpg,*.jpeg -Recurse

$deletedCount = 0

foreach ($file in $files) {
    if ($file.Name -match "android-chrome|favicon|apple-touch|icon|vercel|next|file|window|globe") { continue }
    
    $escapedName = [Regex]::Escape($file.Name)
    $matches = Get-ChildItem -Path "$searchDir\app", "$searchDir\components" -Recurse -Include *.tsx,*.ts,*.css -ErrorAction SilentlyContinue | Select-String -Pattern $escapedName -Quiet

    if (-not $matches) {
        Write-Output "Deleted: $($file.Name)"
        Remove-Item -Path $file.FullName -Force -ErrorAction SilentlyContinue
        $deletedCount++
    }
}
Write-Output "Total files deleted: $deletedCount"
