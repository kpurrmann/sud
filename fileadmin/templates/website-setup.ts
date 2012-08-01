//		 _____________
//		|       .-.   |
//		|      // ``  |
//		|     //      |
//		|  == ===-_.-'|
//		|   //  //    |
//		|__//_________|
//
//	Project:
//	Version:	1.0.0
//	Date:
//	Auhor:
//
// Done with t3codr.
// http://typo3.familie-redlich.de
//


#| --- Libs ------------------------------------------------------------------------------------------- |#
lib.stdheader.stdWrap.dataWrap >
lib.stdheader.3 >
lib.stdheader.10.1.dataWrap = <h3>|</h3>
lib.stdheader.10.2.dataWrap = <h4>|</h4>
lib.stdheader.10.3.dataWrap = <h5>|</h5>
lib.stdheader.10.4.dataWrap = <h6>|</h6>
lib.stdheader.10.5.dataWrap = <h2>|</h2>


#| --- tt_content ------------------------------------------------------------------------------------- |#

tt_content.stdWrap.innerWrap >
tt_content.menu = COA
tt_content.menu {
    20 {
        # Aktuelle Projekte
        100 = HMENU
        100 {
            special = list
            special.value.field = pages
            1 = TMENU
            1 {
                noBlur = 1
                wrap = |
                NO {
                    ATagTitle.field = title
                    ATagTitle.wrap = Direkt zum Projekt: "|"
                    ATagParams = class="reference"
                    linkWrap = |
                    stdWrap.htmlSpecialChars = 0
                    stdWrap.cObject = COA
                    stdWrap.cObject {
                        10 = IMAGE
                        10 {
                            wrap = |
                            required = 1
                            file.import.field = media
                            file.import = uploads/media/
                            file.import.listNum = 0
                            file.quality = 95
                            altText = TEXT
                            altText.field = title
                            altText.wrap = Vorschaubild zum Projekt: |
                        }
                        15 < .10
                        15.file.import.listNum = 1
                        15.altText.wrap = Hoverbild zum Projekt: |
                        15.params = class="hidden"
                        20 = TEXT
                        20 {
                            field = title
                            wrap = <span class="hidden">|</span>
                        }
                        30 = COA
                        30 {
                            wrap = <div class="reference-description">|</div>
                            10 = TEXT
                            10 {
                                wrap = <h4>|</h4>
                                field = title
                            }
                            20 = TEXT
                            20 {
                                field = abstract
                                wrap = <p>|</p>
                                stripHtml = 1
                            }
                        }
                    }
                }
            }
        }

        # Referenzen
        110 = HMENU
        110 {
            special = directory
            special.value.field = pages
            special.value.data >
            1 = TMENU
            1 {
                noBlur = 1
                wrap = <ul class="reference-list">|</ul>
                NO {
                    ATagTitle.field = title
                    ATagTitle.wrap = Direkt zum Projekt: "|"
                    ATagParams = class="reference"
                    wrapItemAndSub = <li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>
                    linkWrap = |
                    stdWrap.htmlSpecialChars = 0
                    stdWrap.cObject = COA
                    stdWrap.cObject {
                        10 = IMAGE
                        10 {
                            wrap = |
                            required = 1
                            file.import.field = media
                            file.import = uploads/media/
                            file.import.listNum = 0
                            file.quality = 95
                            altText = TEXT
                            altText.field = title
                            altText.wrap = Vorschaubild zum Projekt: |
                        }
                        15 < .10
                        15.file.import.listNum = 1
                        15.altText.wrap = Hoverbild zum Projekt: |
                        15.params = class="hidden"
                        20 = TEXT
                        20 {
                            field = title
                            wrap = <span class="hidden">|</span>
                        }
                        30 = COA
                        30 {
                            wrap = <div class="reference-description">|</div>
                            10 = TEXT
                            10 {
                                wrap = <h4>|</h4>
                                field = title
                            }
                            20 = TEXT
                            20 {
                                field = abstract
                                wrap = <p>|</p>
                                stripHtml = 1
                            }
                        }
                    }
                }
            }
        }
        # Kundenliste
        120 < .110
        120 {
            1.wrap = <ul class="costumer-list">|</ul>
            1.NO.wrapItemAndSub = <li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>
            1.NO.stdWrap.cObject >
            1.NO.stdWrap.cObject.30 >
            1.NO.doNotLinkIt = 1
            1.NO.stdWrap.cObject = CASE
            1.NO.stdWrap.cObject {
                key.field = doktype
                3 = COA
                3 {
                    10 = IMAGE
                    10 {
                        wrap = |
                        required = 1
                        file.import.field = media
                        file.import = uploads/media/
                        file.import.listNum = 0
                        file.quality = 95
                        altText = TEXT
                        altText.field = title
                        altText.wrap = Vorschaubild zum Projekt: |
                    }
                    15 < .10
                    15.file.import.listNum = 1
                    15.altText.wrap = Hoverbild zum Projekt: |
                    15.params = class="hidden"
                    20 = TEXT
                    20 {
                        field = title
                        wrap = <span class="hidden">|</span>
                    }
                    30 >
                    field = nav_title
                    stdWrap.typolink.parameter.field = url
                    stdWrap.typolink.params = target="_blank"   
                }
            }
            1.NO.ATagTitle.field = subtitle
            1.NO.ATagTitle.wrap = |
            1.NO.ATagParams = class="reference" target="_blank"
        }
        # Newsliste
        130 = HMENU
        130 {
            special = directory
            special.value.field = pages
            1 = TMENU
            1 {
                noBlur = 1
                wrap = |
                NO {
                    doNotLinkIt = 1
                    ATagTitle.field = title
                    ATagParams = class="reference"
                    wrapItemAndSub = <article class="news">|</article>
                    linkWrap = |
                    stdWrap.htmlSpecialChars = 0
                    stdWrap.cObject = COA
                    stdWrap.cObject {
                        10 = IMAGE
                        10 {
                            wrap = <figure>|</figure>
                            required = 1
                            file.import.field = media
                            file.import = uploads/media/
                            file.import.listNum = 0
                            file.quality = 95
                            altText = TEXT
                            altText.field = title
                            altText.wrap = |
                        }
                        20 = COA   
                        20 {
                            wrap = <hgroup class="news-head">|</hgroup>
                            20 = TEXT
                            20 {
                                field = title
                                wrap = <h3>|</h3>
                            }
                            25 = TEXT
                            25 {
                                field = lastUpdated
                                strftime = %d. %B %Y
                                wrap = <h4 class="date">|</h4>
                                required = 1
                            }
                        }
                        30 = TEXT
                        30 {
                            field = abstract
                            wrap = <div class="hidden news-content">|</div>
                            stripHtml = 0
                        }
                        40 = TEXT
                        40 {
                            wrap = <div class="hidden facebook-like">|</div>
                            typolink {
                                parameter.field = uid
                            }
                        }
                    }
                }
            }
        }
    }
}

[globalVar = TSFE:id = 7]
#Referenzen jeweiels nur 8 Stück anzeigen
tt_content.menu {
    20 {
        110 {
            maxItems = 6
            1.NO.wrapItemAndSub = <li>|</li>
        }
    }
}

[end]

tt_content.image {
    20 {
        1 {
            params = class="bild"  
            file.import.current = 1
            file.width.value = 800
            imageLinkWrap = 1
            imageLinkWrap {
                bodyTag = <body style="margin:0; background:#fff;">
                wrap = <a href="javascript:close();"> | </a>
                width = {$styles.content.imgtext.linkWrap.width}
                height = {$styles.content.imgtext.linkWrap.height}
                effects = {$styles.content.imgtext.linkWrap.effects}

                JSwindow = 0
                JSwindow.newWindow = 0
                JSwindow.if.isFalse = 1

                directImageLink = 1

                enable.field = image_zoom
                enable.ifEmpty.typolink.parameter.field = image_link
                enable.ifEmpty.typolink.parameter.listNum.splitChar = 10
                enable.ifEmpty.typolink.parameter.listNum.stdWrap.data = register : IMAGE_NUM_CURRENT
                enable.ifEmpty.typolink.returnLast = url

                typolink.parameter.field = image_link
                typolink.parameter.listNum.splitChar = 10
                typolink.parameter.listNum.stdWrap.data = register : IMAGE_NUM_CURRENT
                typolink.target = {$styles.content.links.target}
                typolink.extTarget = {$styles.content.links.extTarget}

                linkParams.ATagParams.dataWrap =  class="{$styles.content.imgtext.linkWrap.lightboxCssClass}" rel="lightbox-{field:uid}"
            }

            altText = TEXT
            altText {
                field = altText
                stripHtml = 1
                split.token.char = 10
                split.token.if.isTrue = {$styles.content.imgtext.imageTextSplit}
                split.returnKey.data = register : IMAGE_NUM_CURRENT
            }

            titleText < .altText
            titleText.field = titleText

            longdescURL >

            emptyTitleHandling = {$styles.content.imgtext.emptyTitleHandling}
            titleInLink = {$styles.content.imgtext.titleInLink}
            titleInLinkAndImg = {$styles.content.imgtext.titleInLinkAndImg}
        }
        maxH = 5000
        maxW = 5000
        layout {
            default = TEXT
            default.value = ###IMAGES######TEXT###
            ### NEWS
            25 = TEXT
            25.value = <article class="news"> <figure>###IMAGES###</figure> ###TEXT### </article>
            25.insertData = 1
            25.crop = 150 | ... | 1
        }
        rendering {
            simple {
                imageRowStdWrap.dataWrap = |
                imageLastRowStdWrap.dataWrap = |
                noRowsStdWrap.wrap = |
                oneImageStdWrap.dataWrap = |
                imgTagStdWrap.wrap = |
                editIconsStdWrap.wrap = |
                caption.wrap = |
                imageStdWrap.dataWrap = |
#                imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap csc-textpic-single-image" style="width:{register:totalwidth}px;"> | </div>
                imageStdWrapNoWidth.wrap = |
            }
        }
        renderMethod = simple
    }
}


#| --- Code Cleanup ----------------------------------------------------------------------------------- |#
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class =


#| --- Template --------------------------------------------------------------------------------------- |#
page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
    layoutRootPath = fileadmin/templates/layouts/
    partialRootPath = fileadmin/templates/partials/
    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
        key.data = levelfield:-1, backend_layout_next_level, slide
        key.override.field = backend_layout
        default = TEXT
        default.value = fileadmin/templates/page-default.html
        2 = TEXT
        2.value = fileadmin/templates/page-reference.html
    }
    variables {
        content = CONTENT
        content {
            stdWrap.wrap = <article>|</article>
            stdWrap.required = 1
            table = tt_content
            select {
                    where = colPos = 0
                    orderBy = sorting
                    languageField = sys_language_uid
            }
            required = 1
        }
        reference_information = CONTENT
        reference_information {
            stdWrap.wrap = |
            stdWrap.required = 1
            table = tt_content
            select {
                    where = colPos = 0
                    orderBy = sorting
                    languageField = sys_language_uid
            }
            required = 1
        }
        two_columns = COA
        two_columns {
            10 = CONTENT
            10 {
                stdWrap.required = 1
                stdWrap.wrap = <article class="columns"><div class="column column-wide">|</div>
                table = tt_content
                select {
                    where = colPos = 1
                    orderBy = sorting
                    languageField = sys_language_uid
                }
            }
            20 < .10
            20.stdWrap.wrap =  <div class="column column-small">|</div></article>
            20.select.where = colPos = 2
        }
        reference_images = CONTENT
        reference_images {
            table = tt_content
            select {
                where = colPos = 1
                orderBy = sorting
                languageField = sys_language_uid
            }
            required = 1
        }
        three_columns < .two_columns
        three_columns {
            5 < .10
            5.stdWrap.wrap = |
            5.select.where = colPos = 6
            10.stdWrap.wrap = <article  class="columns"><div class="column column-extrasmall">|</div>
            10.select.where = colPos = 3
            20.stdWrap.wrap = <div class="column column-extrasmall">|</div>
            20.select.where = colPos = 4
            30 < .10
            30.stdWrap.wrap = <div class="column column-extrasmall last">|</div></article>
            30.select.where = colPos = 5
        }
        two_cols_left_small = COA
        two_cols_left_small {
            wrap = |
            10 = CONTENT
            10 {
                stdWrap.required = 1
                stdWrap.wrap = <article class="columns"><div class="column column-extrasmall">|</div>
                table = tt_content
                select {
                    where = colPos = 7
                    orderBy = sorting
                    languageField = sys_language_uid
                }
            }
            20 < .10
            20 {
                stdWrap.wrap = <div class="column column-wide last">|</div></article>
                select.where = colPos = 8
            }
        }
    }
}

[PIDinRootline = 28]
page.10.variables.content >
page.10.variables.content = COA
page.10.variables.content {
    wrap = <article class="news news-detail">|</article>
    5 = TEXT
    5 {
        data = field:title
        insertData = 1
        wrap = <h2>|</h2>
    }
    10 = IMAGE
    10 {
        wrap = <figure>|</figure>
        required = 1
        file.import.data = field:media
        file.import = uploads/media/
        file.import.listNum = 0
        file.quality = 95
        altText = TEXT
        altText.field = title
        altText.wrap = |
    }
    20 = TEXT
    20 {
        data = field:abstract
        insertData = 1
        wrap = |
    }
}
[global]

[globalVar = GP:type = 98]
page = PAGE
page.typeNum = 98
page.10 >
page.10 = COA
page.10 {
    wrap =   <section id="lightbox">|</section>
    10 < styles.content.get
}
[end]

[PIDinRootline = 34]
page.10.wrap =   <section id="lightbox" class="last">|</section>
[end]

lib.socialnavigation = HMENU
lib.socialnavigation {
    special = directory
    special.value = 9
    wrap = <nav id="social-navigation">|</nav>
    1 = TMENU
    1 {
        wrap = <ul>|</ul>
        noBlur = 1
        NO {
            linkWrap = <li>|</li>
            doNotLinkIt = 1
            stdWrap.htmlSpecialChars = 0
            stdWrap.cObject = CASE
            stdWrap.cObject {
                key.field = doktype
                3 = COA
                3 {   
                    10 = IMAGE
                    10 {
                        wrap = |
                        required = 1
                        file.import.field = media
                        file.import = uploads/media/
                        file.import.listNum = 0
                        file.quality = 95
                        altText = TEXT
                        altText.field = title
                        altText.wrap = Icon zu: |
                        params = class="imghover"
                    }
                    20 = TEXT
                    20 {
                        field = title
                        wrap = <span class="hidden">|</span>
                    }   
                    field = nav_title
                    stdWrap.typolink.parameter.field = url
                    stdWrap.typolink.params = target="_blank"   
                    stdWrap.typolink.title = TEXT
                    stdWrap.typolink.title.field = subtitle   
                }    
            }
        }
    }
}

# SERVICENAVIGATION

lib.servicenavigation = HMENU
lib.servicenavigation {
    special = directory
    special.value = 8
    wrap = <nav id="service-navigation">|</nav>
    1 = TMENU
    1 {
        ATagTitle.field = subtitle
        wrap = <ul>|</ul>
        noBlur = 1
        NO {
            wrapItemAndSub = <li>|</li>
        }
    }
}

#MAINNAVIGATION

lib.mainnavigation = HMENU
lib.mainnavigation {
    special = directory
    special.value = 1
    wrap = <nav id="main-navigation">|</nav>
    1 = TMENU
    1 {
        noBlur = 1
        wrap = <ul>|</ul>
        expAll = 1
        NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle
        }
        ACT = 1
        ACT.wrapItemAndSub = <li class="active">|</li>
        CUR < .ACT
    }
    2 < .1
}

lib.backlink = IMAGE
lib.backlink {
    wrap = |
    required = 1
    file = fileadmin/images/ico-all-reference.png
    altText = Übersichtsbild
    params = class="imghover"
    stdWrap.typolink = 1
    stdWrap.typolink {
        data = leveltitle : -2
        insertData = 1
        parameter = 7
        ATagParams = class="back-link" title="Zurück zur Übersicht"
    }
}

lib.pagetitle = COA
lib.pagetitle {
    10 = TEXT
    10 {
        wrap = <h2>|</h2>
        data = leveltitle : -1 
        insertData = 1
    }
    20 = TEXT
    20 {
        wrap = <h3>|</h3>
        data = leveltitle : -2
        insertData = 1
    }

}


lib.other_projects = HMENU
lib.other_projects {
    special = directory
    special.value.data = leveluid : -2
    maxItems = 6
    1 = TMENU
    1 {
        alternativeSortingField = RAND()
        noBlur = 1
        wrap = <h2>Weitere Projekte</h2><ul class="reference-list">|</ul>
        NO {
            ATagTitle.field = subtitle
            ATagParams = class="reference"
            wrapItemAndSub = <li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>
            linkWrap = |
            stdWrap.htmlSpecialChars = 0
            stdWrap.cObject = COA
            stdWrap.cObject {
                10 = IMAGE
                10 {
                    wrap = |
                    required = 1
                    file.import.field = media
                    file.import = uploads/media/
                    file.import.listNum = 0
                    file.quality = 95
                    altText = TEXT
                    altText.field = title
                    altText.wrap = Vorschaubild zum Projekt: |
                }
                15 < .10
                15.file.import.listNum = 1
                15.altText.wrap = Hoverbild zum Projekt: |
                15.params = class="hidden"
                20 = TEXT
                20 {
                    field = title
                    wrap = <span class="hidden">|</span>
                }
                30 = COA
                30 {
                    wrap = <div class="reference-description">|</div>
                    10 = TEXT
                    10 {
                        wrap = <h4>|</h4>
                        field = title
                    }
                    20 = TEXT
                    20 {
                        field = abstract
                        wrap = <p>|</p>
                        stripHtml = 1
                    }
                }
            }
        }
    }
}