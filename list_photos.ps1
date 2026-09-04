$folders = Get-ChildItem -Path "d:\Nouveau dossier\assets\images\cars" -Directory
foreach ($f in $folders) {
    Write-Host "FOLDER: " $f.Name
    Get-ChildItem $f.FullName -File | ForEach-Object { Write-Host "   " $_.Name }
}
