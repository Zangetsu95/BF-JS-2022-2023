import { IsDefined, IsInt, IsNumber, IsPositive } from 'class-validator';

export class StockDTO {
  @IsInt({ message: "l'identifiant doit être un nombre entier" })
  @IsDefined({ message: "l'identifiant ne peut pas être vide" })
  id: number;
  /*-------------------------------------------------------- */
  @IsInt({ message: "l'identifiant du produit doit être un nombre entier" })
  @IsDefined({ message: "l'identifiant du produit ne peut pas être vide" })
  product_id: number;
  /*-------------------------------------------------------- */
  @IsNumber()
  @IsPositive({ message: 'La quantité doit être positive.' })
  quantity: number;
}
