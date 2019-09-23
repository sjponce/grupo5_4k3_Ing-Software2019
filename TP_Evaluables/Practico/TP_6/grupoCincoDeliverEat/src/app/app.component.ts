import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}
  stepOneFormGroup: FormGroup;
  stepTwoFormGroup: FormGroup;
  stepThreeFormGroup: FormGroup;
  _formBuilder: FormBuilder = new FormBuilder()
  headersComercioAdherido = ["codigo","nombre","precio",'opciones'];
  public min = new Date();
  productosComercioAdherido = [
    {
    codigo:"AAAA",
    nombre:"Pepsi 350ml",
    precio: 50
   },
   {
    codigo:"BBBB",
    nombre:"Pancho",
    precio: 100
   },
   {
    codigo:"CCCC",
    nombre:"Hamburguesa",
    precio: 150
   }
   ];
  productosComercioAdheridoSource = new MatTableDataSource(this.productosComercioAdherido);
   headersCarrito = ["cantidad","codigo","nombre","precio", "opciones"];
   productosCarrito = [];
   productosCarritoSource = new MatTableDataSource(this.productosCarrito);
   aCompra = false;
   isLinear = false;
   
   ngOnInit(){  
  }
  title = 'grupoCincoDeliverEat';
  
  agregarAlCarrito(item){
    let exist = false;
    this.productosCarrito.map(prod=>{
      if(prod == item){
        prod.cantidad = prod.cantidad + 1;
        exist = true;
      }
    });
    if(!exist){
      item.cantidad = 1;
      this.productosCarrito.push(item);
    }    
    this.refreshProductosCarrito();
  }

  sacarDelCarrito(index){
    if(this.productosCarrito[index].cantidad == 1)
    this.productosCarrito.splice(index,1);
    else
    this.productosCarrito[index].cantidad = this.productosCarrito[index].cantidad - 1
    this.refreshProductosCarrito();
  }

  refreshProductosCarrito(){
    this.productosCarritoSource = new MatTableDataSource(this.productosCarrito)
  }

  confirmarCompra(){
    if(this.productosCarrito.length){
      this.aCompra = true;
      this.stepOneFormGroup = this._formBuilder.group({
        calle: [null, Validators.required],
        numero: [null, Validators.required],
        ciudad: [null, Validators.required],
        referencia: [null, Validators.required],
       });
       this.stepTwoFormGroup = this._formBuilder.group({
         fechaEntregaRadio: ['', Validators.required],
         fechaEntregaDtp: ['', Validators.required],
       });
       this.stepThreeFormGroup = this._formBuilder.group({
         formaDePago: ['', Validators.required],
         montoAbonar: ['', [Validators.required, Validators.min(this.calcularTotalCarrito())]],
       });
    }else{
      alert("Debe tener productos en el carrito!");
    }
  }

  finalizarCompra(){
    console.log("end")
  }

  cancelarCompra(){
      this.aCompra = false;
  }

  calcularTotalCarrito(){
    let total = 0;
    this.productosCarrito.map(prod=>{
      total += prod.precio * prod.cantidad
    })
    return total;
  }

  click(){
    console.log(this.stepOneFormGroup,this.stepTwoFormGroup,this.stepThreeFormGroup);
  }
}
