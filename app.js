// Sayının Bölenlerinin Toplamını Bulma 
const bölenlerinToplamı = (number) => {
    let toplam = 0;
    for (let i = 0; i <= number; i++) {
        if(number % i ===0){
            toplam += i  
        }
    }
    return toplam
}


//  1- Asal Sayılar 
const asalSayilariBul = (...numbers) => {
    const asalSayilar = [];
    numbers.forEach((number) => {
      let count = 0;
  
      if (number === 2 || number % 2 !== 0) {
        for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
            count++;
          }
        }
      }
  
      if (count === 2) {
        asalSayilar.push(number);
      }
    });
    console.log(asalSayilar);
  };
  asalSayilariBul(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);



// 2- Arkadaş Sayılar
// İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
// 220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
// 284 : 1 + 2 + 4 + 71 + 142 = 220 


const arkadaşSayilarMı = (number1,number2) => {
    let toplam1 = 0
    let toplam2 = 0
    for (let i = 1; i < number1 ; i++) {
        if(number1 % i === 0){
            toplam1 += i
        }
    }
    for (let i = 1; i < number2 ; i++) {
        if(number2 % i === 0){
            toplam2 += i
        }
    }    
    if(toplam1 === number2 && toplam2 === number1){
        console.log(`${number1} ve ${number2} arkdaş sayılar`)
    }else{
        console.log(`${number1} ve ${number2} arkdaş sayılar değil`)
    }
}

arkadaşSayilarMı(220,284)


// 3 - Mükemmel Sayilar
// Matematikte bazı pozitif tam sayıların pozitif bölenleri toplamı, sayının kendisinin iki katına eşittir. Bu tür sayılara “mükemmel sayı” denir.
// Örneğin 6 sayısını ele alalım: 1, 2, 3 ve 6 bu sayının bölenleridir ve tüm bu bölenlerin toplamı, yani 1+2+3+6, sayının iki katı olan 12’ye eşittir

const mükemmelSayiMi = () =>{
    const mükemmelSayilar = []
    for (let i = 1; i < 1000; i++) {
        if(bölenlerinToplamı(i) === (i * 2)){
            mükemmelSayilar.push(i)
        }
    }
    console.log(mükemmelSayilar)
}

mükemmelSayiMi()


const asalSayilariYazdır = () => {
    const numbers = [];
    for (let i = 1; i < 1000; i++) {
      numbers.push(i);
    }
    asalSayilariBul(...numbers);
  };
  asalSayilariYazdır();




