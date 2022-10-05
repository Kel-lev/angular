import { Component } from '@angular/core';
import { Producto }from './model/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'angular-demo ';
  imagen:string="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";
  btn:boolean=true;
  name:string="";
  o_nombre:string="";
  o_apellido:string="";
  o_edad:number=0;
  persona={
    nombre:"Juan",
    apellido:"Përez",
    edad:22,
    imag:"https://img.freepik.com/psd-premium/avatar-personaje-masculino-3d-aislado_239978-142.jpg"
  }

  personas:any[]=[
    {
    nombre:"Alex",
    apellido:"Figueroa",
    edad:22
    },
    {
    nombre:"Martha",
    apellido:"Nopuedo",
    edad:50
    }
  ]

  nombres:string[]=[
    "Juan",
    "Pedro",
    "Luciana",
    "Kelma"
  ];

  numeros:number[]=[
    5,
    15,
    22

  ];

  p_nombre: string="";
  p_precio: number=0;
  p_imagen: string="";

  productos:Producto[]=[
    {
      nombre:"carrito",
      precio: 450,
      imagen:"https://image.made-in-china.com/43f34j00YCUfORBMZobZ/New-Licensed-Lamborghini-CE-New-Model-Electric-Remote-Control-Car-Toys-for-Children-Ride-on-Car.jpg"
    }
  ];

  cambioBoton():void{
    this.btn=!this.btn
  }

  incrementaEdad():void{
    this.persona.edad +=1;
  }

  onScroll(event:Event):void{
    const elemento=event.target as HTMLElement;
    console.log(elemento.scrollTop);
  }

  cambioNombre(event:Event):void{
    const elemento=event.target as HTMLInputElement;
    this.persona.nombre=elemento.value;
  }

  agregarNombre():void{
    this.nombres.push(this.name);
    this.name="";
  }

  eliminarNombre(posicion:number):void {
    this.nombres.splice(posicion,1);
  }

  agregarPersona():void{
    const nuevaPersona={
      nombre:this.o_nombre,
      apellido:this.o_apellido,
      edad:this.o_edad
    }
    this.personas.push(nuevaPersona);
    this.o_nombre="";
    this.o_apellido="";
    this.o_edad=0;
  }

  eliminarPersona(posicion:number):void {
    this.personas.splice(posicion,1);
  }
  
  agregarProducto():void{
    const nuevoProducto={
      nombre:this.p_nombre,
      imagen:this.p_imagen,
      precio:this.p_precio
    };
    this.productos.push(nuevoProducto);
    this.p_nombre="";
    this.p_imagen="";
    this.p_precio=0;
  }
}

/*-----------------------------------------------------*/
/*------------------------TYPESCRIPT-------------------*/
/*-----------------------------------------------------*/

// const usuario="kelmaLeva";
// console.log(usuario);

// var usuario:string |number="kelma";
// console.log(typeof(usuario));
// console.log(usuario);
// usuario=5;
// console.log(typeof(usuario));
// console.log(usuario);

// const suma =(a: number, b:number): number => {
//   const salida=a+b;
//   return salida;
// }

// const valor01:number=10;
// const valor02:number=15;

// console.log(suma(suma(valor01,valor02),30)+" Kelma");

// class Usuario{
//   // nombre:string;
//   // password:string; 
//   // edad:number;

//   constructor(private nombre:string,
//     private password:string,
//     private edad:number){
//       // this.nombre=nombre;
//       // this.password=password;
//       // this.edad=edad;
//     }

//   mostrar(): string {
//     const salida= "nombre: "+ this.nombre +"\n"+
//     "password: "+this.password +"\n"+
//     "edad: "+this.edad;
//     return salida;
//   }
// }

// const usr01:Usuario=new Usuario("kelma","kel_lev",23);
// const usr02:Usuario=new Usuario("Ivonne","ivo_lev",23);
// // console.log("nombre: "+ usr01.nombre);
// // console.log("password: "+ usr01.password);
// // console.log("edad: "+ usr01.edad);

// console.log(usr01.mostrar());
// console.log(usr02.mostrar());