function pilihanKomputer(){
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return'semut';
}

function hasil(comp, player){
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function()  {
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if( i == gambar.length) i=0;
    }, 100);
}



//cara lebih efektif

let i = 0;
let j = 0;
const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil){
    //semua dipilih
    pil.addEventListener('click', function(){
        //hanya 1 yang diambil jika diklik
        const pilComputer = pilihanKomputer();
        const pilPlayer = pil.className;
        const hasilSuit = hasil(pilComputer, pilPlayer);

        putar()

        setTimeout(function()  {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilComputer + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasilSuit;

            if(hasilSuit == 'MENANG!'){
                i++
            }
            else if(hasilSuit == 'KALAH!'){
                j++
            }
            //player menang
            const pMenang = document.querySelector('.pMenang')
            pMenang.innerHTML = `Menang : ${i}`;

            //computer menang
            const cMenang = document.querySelector('.cMenang')
            cMenang.innerHTML = `Menang : ${j}`;
        }, 1000);

    })
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
    i = 0;
    j = 0
    document.querySelector('.pMenang').innerHTML = `Menang : ${i}`;
    document.querySelector('.cMenang').innerHTML = `Menang : ${j}`;
});







//cara 1 1
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilComputer = pilihanKomputer();
//     const pilPlayer = pGajah.className;
//     const hasilSuit = hasil(pilComputer, pilPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasilSuit;
// });


