document.getElementById('form-pinjaman').addEventListener('submit', kalkulatorPinjaman)

function kalkulatorPinjaman(e) {
  const amount = document.getElementById('amount')
  const interest = document.getElementById('interest')
  const years = document.getElementById('years')
  const pembayaran = document.getElementById('pembayaran')
  const totalPembayaran = document.getElementById('total_pembayaran')
  const totalInterest = document.getElementById('total_interest')

  // Logika hitungannya belum dapat
  const pinjaman = parseFloat(amount.value)
  const hitungBunga = parseFloat(interest.value) / 100 / 12
  const hitungJumlah = parseFloat(years.value) * 12

  const x = Math.pow(1 + hitungBunga, hitungJumlah)

  const bayarBulanan = (pinjaman * x * hitungBunga) / (x - 1)
  if (isFinite(bayarBulanan)) {
    pembayaran.value = bayarBulanan.toFixed(2)
    totalPembayaran.value = (bayarBulanan * hitungJumlah).toFixed(2)
    totalInterest.value = ((bayarBulanan * hitungJumlah) - pinjaman).toFixed(2)
  } else {
    showError('mohon isi dengan benar')
  }
  e.preventDefault()
}