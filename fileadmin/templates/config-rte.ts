RTE.default.showButtons = textstyle, textstylelabel, formatblock, blockstyle, blockstylelabel, bold, italic, underline, left, center, right, orderedlist, unorderedlist, insertcharacter, line, link, image, removeformat, table, toggleborders, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, findreplace, acronym, insertcharacter, undo, redo, showhelp, about, user, chMode
RTE.default {
	buttons.formatblock.removeItems = h5, h6, h7
	classesAnchor = external-link, external-link-new-window, internal-link, internal-link-new-window, download, link-more, document-download, mail, link-video, link-more lightbox
	classesAnchor.default {
		page = internal-link
		url = external-link-new-window
		file = download
		mail = mail
		video = video
		lightbox = link-more lightbox
	}

	proc.allowedClasses {
		external-link, external-link-new-window, internal-link, internal-link-new-window, download, link-more, document-download, mail,
		align-left, align-center, align-right,
		csc-frame-frame1, csc-frame-frame2,
		component-items, action-items,
		component-items-ordered, action-items-ordered,
		important, name-of-person, detail,
		link-video, link-more lightbox,
	}
	proc.allowTags := addToList(abbr, acronym)
}

RTE.classesAnchor {
	link-more {
		class = link-more
		type = page
	}
	document-download {
		class = document-download
		type = file
		titleText = Datei herunterladen
	}
	link-video { 
		class = link-video
		type = page
		titleText = Zum Video
	}
	lightbox { 
		class = "link-more lightbox"
		type = page
		titleText = Lightbox-Link
	}
}

RTE.default.userElements {
	10 = Tipp-Box
	10 {
		1 = Tipp-Box ohne Motiv
		1.content = <div class="box-info"><h5>Tipp:</h5><div class="box-info-content"><p>DenTippTextHierEinfügen</div></div>
	}
}
RTE.default.FE < RTE.default
