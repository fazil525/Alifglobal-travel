$files = @("index.html", "uae-tours.html", "events.html", "travel-resources.html")
$basePath = "C:\Users\Fgafoor\OneDrive - Emirates Reem Investments Company PJSC\Desktop\aliftravel\"

foreach ($f in $files) {
    if (Test-Path "$basePath\$f") {
        $html = [System.IO.File]::ReadAllText("$basePath\$f")
        
        # 1. Update Navigation Menu universally
        $oldNav = '<li><a href="uae-tours.html" class="nav-link">UAE Tours</a></li>'
        $newNav = @"
                    <li class="nav-dropdown" style="position: relative;">
                        <a href="#" class="nav-link dropdown-toggle" aria-haspopup="true">Tours <span class="dropdown-caret">&#x25BE;</span></a>
                        <ul class="nav-dropdown-menu">
                            <li><a href="uae-tours.html" class="dropdown-link">UAE Packages</a></li>
                            <li><a href="kerala-tourism.html" class="dropdown-link">Kerala Tourism</a></li>
                        </ul>
                    </li>
"@
        if ($html.Contains($oldNav)) {
            $html = $html.Replace($oldNav, $newNav)
        }
        
        # 2. Add countries.js script to the bottom (just before script.js)
        if (-not $html.Contains('countries.js')) {
            $html = $html.Replace('<script src="script.js', "<script src=`"assets/countries.js`"></script>`r`n    <script src=`"script.js")
        }
        
        [System.IO.File]::WriteAllText("$basePath\$f", $html, [System.Text.Encoding]::UTF8)
    }
}

# 3. Specifically update travel-resources.html for the Visa Selector
$trPath = "$basePath\travel-resources.html"
$trHtml = [System.IO.File]::ReadAllText($trPath)

$oldSelect = @"
                        <select id="nationality" class="form-control">
                            <option value="">Select Nationality...</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="IN">India</option>
                            <option value="PK">Pakistan</option>
                            <option value="PH">Philippines</option>
                            <option value="RU">Russia</option>
                            <option value="CN">China</option>
                            <option value="EU">European Union</option>
                            <option value="OTHER">Other</option>
                        </select>
"@
$newSelect = @"
                        <input type="text" id="nationality" list="countries-list" class="form-control" placeholder="Start typing your country..." autocomplete="off">
                        <datalist id="countries-list"></datalist>
"@
if ($trHtml.Contains('<select id="nationality"')) {
    $trHtml = $trHtml.Replace($oldSelect, $newSelect)
}
[System.IO.File]::WriteAllText($trPath, $trHtml, [System.Text.Encoding]::UTF8)

# 4. Generate kerala-tourism.html by cloning uae-tours.html
$keralaPath = "$basePath\kerala-tourism.html"
if (-not (Test-Path $keralaPath)) {
    Copy-Item "$basePath\uae-tours.html" $keralaPath
}
