#| --- Page Config ------------------------------------------------------------------------------------ |#
config {
    linkVars =
    uniqueLinkVars = 1
    sys_language_uid = 0
    language = de
    htmlTag_setParams = none
    meaningfulTempFilePrefix = 64
    baseURL = {$myBaseURL}
    prefixLocalAnchors = all
    simulateStaticDocuments = 0
    tx_realurl_enable = 1
    locale_all = de_DE.utf8
    spamProtectEmailAddresses = 2
    spamProtectEmailAddresses_atSubst = @
    spamProtectEmailAddresses_lastDotSubst = .
}


#| --- Header & Body ---------------------------------------------------------------------------------- |#
page = PAGE
page {
    config {
        doctype = html5
        xmlprologue = none
        disablePrefixComment = 0
        htmlTag_langKey = de-DE
        meta.language = de
        pageTitleFirst = 1
        removeDefaultJS = 0
        removeDefaultCSS = 1
        inlineStyle2TempFile = 1
        xhtml_cleaning = all
        extTarget = _blank
    }
    meta {
        keywords.field = keywords
        keywords.ifEmpty (
            Illustration, Webdesign, Printdesign, Berlin, Agentur, Typo3, Fullservice
        )
        description.field = description
        description.ifEmpty (
            Stürmer und Dränger Kreativbüro - Kreative Ideen für Print- und Onlinemedien in Berlin, Brandenburg und Deutschland.
        )
        FLAGS.DC = 0
        robots = index,follow
        author = Stürmer und Dränger
        viewport = width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=0.1; user-scalable=1;
    }
    includeJS >
    includeJS {
        modernizer = fileadmin/scripts/content/modernizr-custom-2.5.3.min.js
    }
    includeCSS {
        normalize = fileadmin/styles/normalize.css
        colorbox = fileadmin/styles/colorbox.css
        layout = fileadmin/styles/layout.css
        navigation = fileadmin/styles/navigation.css
        content = fileadmin/styles/content.css
        forms = fileadmin/styles/forms.css
    }
    includeJSFooter {
        jQuery = https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
        jQuery.external = 1
        jQueryUi = https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js
        jQueryUi.external = 1
        libImgHover = fileadmin/scripts/content/jquery.imghover-1.1rc.js
        libColorbox = fileadmin/scripts/content/jquery.colorbox-min.js
        imgHover = fileadmin/scripts/content/imghover.js
        stage = fileadmin/scripts/content/stage.js
    }
}

page.headerData.18 = HTML
page.headerData.18.value (


<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-32242323-1']);
  _gaq.push(['_setDomainName', 'stuermer-draenger.de']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

)

[hostname = localhost] || [globalString = IENV:HTTP_HOST = localhost]
    page.headerData.18.value >
[end]