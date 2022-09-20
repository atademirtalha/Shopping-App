import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [
    {
      name: 'Peynir',
      price: 26.61,
      imageUrl:
        'https://productimages.hepsiburada.net/s/33/375/10421493334066.jpg',
    },
    {
      name: 'Zeytin',
      price: 40,
      imageUrl:
        'https://productimages.hepsiburada.net/s/20/500/9896958722098.jpg',
    },
    {
      name: 'Tereyağ',
      price: 70,
      imageUrl:
        'https://productimages.hepsiburada.net/s/37/1500/10566221266994.jpg',
    },
    {
      name: 'Lavaş',
      price: 27,
      imageUrl:
        'https://productimages.hepsiburada.net/s/48/1500/10943073976370.jpg',
    },
    {
      name: 'Aç Bitir',
      price: 16,
      imageUrl:
        'https://productimages.hepsiburada.net/s/32/500/10364950020146.jpg',
    },
    {
      name: 'Meyve Suyu',
      price: 29.99,
      imageUrl:
        'https://productimages.hepsiburada.net/s/10/375/9218363064370.jpg',
    },
    {
      name: 'Ekmek',
      price: 4,
      imageUrl:
        'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg',
    },
    {
      name: 'Tavuk Bonfile',
      price: 78.32,
      imageUrl:
        'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46040139/46040139-f4dfb8-1650x1650.jpg',
    },
  ];

  baskets: BasketModel[] = [];
  total: number = 0;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {}
  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt(
      (<HTMLInputElement>document.getElementById('quantity-' + product.name))
        .value
    );
    (<HTMLInputElement>(
      document.getElementById('quantity-' + product.name)
    )).value = '1';
    this.baskets.push(basketModel);
    this.myEvent.emit({ data: this.baskets });
    this.toastrService.success(product.name + ' sepete başarıyla eklendi.');
  }
}
