let captcha = new Array()

function captchajavascript() {
  let recaptcha = document.getElementById("nilaicaptcha").value
  let nilai = 0
  for (let i = 0; i < 6; i++) {
    if (recaptcha.charAt(i) != captcha[i]) {
      nilai++
    }
  }
  if (recaptcha == "") {
    document.getElementById('errCaptcha').innerHTML = 'isi Captcha Terlebih Dahulu'
  } else if (nilai > 0 || recaptcha.length > 6) {
    document.getElementById('errCaptcha').innerHTML = 'Captcha salah'
  } else {
    document.getElementById('errCaptcha').innerHTML = 'Data berhasil disimpan'
  }
}

function creatCaptcha() {
  for (z = 0; z < 6; z++) {
    if (z % 2 == 0) {
      captcha[z] = String.fromCharCode(Math.floor((Math.random() * 26) + 65))
    } else {
      captcha[z] = Math.floor((Math.random() * 10) + 0)
    }
  }
  theCaptcha = captcha.join("")
  document.getElementById('captcha').innerHTML = "<span class= 'captcha'>" + theCaptcha + "</span>" +
    "&nbsp; <a onclick = 'creatCaptcha()' href='#'>Cari yang lain</a>"

  // cara lain dengan menggunakan button tapi masalah dengan menekan enter captcha akan berubah dan input keluar history inputna 
  // kelebihan tidak bisa di copas
  // document.getElementById('captcha').innerHTML = "<a onclick = 'creatCaptcha()' href='#'><button class= 'btn captcha'>" + theCaptcha + "</button>" +
  //   "&nbsp;</a>"
}