// Elə bir metod yazın ki parametr olaraq ancaq array qebul etsin (Array.isArray()).Və consolda arrayın ən kiçik elementini qaytarsın
// function enkicik(arr,callback) {
//     let min=arr[0]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return callback(min)
// }
// function Output(output) {
//     console.log(output);
// }
// let arr=[10,20,25,5,2,40]
// let boolean=Array.isArray(arr);
// if(boolean){
//enkicik(arr,Output);}
// else{
//     console.log("array deyil");
// }


//sahin
// let newline="\r\n"
// class Animal{

//     Eat(yemek){
//         this.eat=yemek;
//         console.log(eat);
//     }
// Walk(metr){
//     this.gezmek=metr;
//     console.log(gezmek);
// }
// Getinfo(){
//     return`heyvanin yemeyi:${this.eat} ${newline} heyvanin gezdiyi:${this.gezmek} ${newline}`
// }
// }
// class Bird extends Animal{
//     constructor(ad,yemek,metr){
//         super(metr,yemek);
//         this.nameanimal=ad;
//         this.eat=yemek
//         this.gezmek=metr


//     }
//     Getinfo(){
//         return`heyvanin adi:${this.nameanimal} ${newline} heyvanin yemeyi:${this.eat} ${newline} heyvanin gezdiyi:${this.gezmek} m ${newline}`
//     }
// }
// let newAnimal=new Bird("bayqus","ot",10)
// console.log(newAnimal.Getinfo());

class Product {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    TotalPrice(...products) {
        let totalPrice = 0;
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            totalPrice += product.price * product.count;
        }
      console.log("Total Price:", totalPrice, "AZN"); 
    }
}

const cofee = new Product("cofee", 0.5, 2);
const cay = new Product("cay", 4, 3);
const fanta = new Product("fanta", 2, 2);

const totalhesab = new Product();
totalhesab.TotalPrice(cofee, cay, fanta,);


 