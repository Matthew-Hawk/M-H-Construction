param([ValidateSet('dev','check','build','preview')][string]$Mode = 'dev')

$ErrorActionPreference = 'Stop'
$bundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
$nodeExecutable = if (Test-Path -LiteralPath $bundledNode) { $bundledNode } else { (Get-Command node -ErrorAction Stop).Source }
$nodeVersion = & $nodeExecutable -p 'process.versions.node'
if ([version]$nodeVersion -lt [version]'22.12.0') { throw 'Install Node 22.12+ to run this site.' }
$env:ASTRO_TELEMETRY_DISABLED = '1'
$astroScript = Join-Path $PSScriptRoot 'node_modules\astro\bin\astro.mjs'
Push-Location -LiteralPath $PSScriptRoot
try {
  if ($Mode -in @('dev','preview')) { & $nodeExecutable $astroScript $Mode --host 127.0.0.1 }
  else { & $nodeExecutable $astroScript $Mode }
} finally { Pop-Location }
exit $LASTEXITCODE
