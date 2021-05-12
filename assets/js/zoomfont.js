	var ie4 = document.all &&! document.getElementById
	var ns4
	var DOM2 = document.getElementById

	if (ns4) document.write ('<ilayer id = "zoomerns"> <layer id = "zoomerns_sub" left = 0 top = 0> </layer> </ilayer>')

	índice var = 10
    var mais = 1
    var menos = 0

	if (DOM2) {
		document.getElementById ("zoomer"). style.fontSize = index * 10 + 0 + "%";
	} else if (ie4) {
		document.all.zoomer.style.fontSize = índice * 10 + 0 + "%";
	} else if (ns4) {
		document.zoomerns.document.zoomerns_sub.document.write (comentários);
		document.zoomerns.document.zoomerns_sub.document.close ()
	}

	função zoom (como) {
		var arr_to_zoom = new Array ("texto", "id1", "id2"); // Aqui você irá colocar um id onde deve ser alterado a letra!
		if ((índice <= 20) && (como == 1)) índice ++
		if ((índice> 8) && (como == 0)) índice -
		document.getElementById ("percent"). value = 1 * (index * 10 + 0) + "%"
		if (DOM2) {
			// alert ("DOM2");
			para (i = 0; i <arr_to_zoom.length; i ++) {
				tentar{
					document.getElementById (arr_to_zoom [i]). style.fontSize = index * 10 + 1 + "%";
				} catch (e) {
				}
			}
		} else if (ie4) {
			// alert ("IE4");
			para (i = 0; i <arr_to_zoom.length (); i ++) {
				document.getElementById (arr_to_zoom [i]). style.fontSize = index * 10 + 1 + "%";
			}
			document.all.zoomer.style.fontSize = índice * 10 + 0 + "%";
		} else if (ns4) {
			// alert ("ns4");
			document.zoomerns.document.zoomerns_sub.document.write (comentários);
			document.zoomerns.document.zoomerns_sub.document.close ();
		}
	}

