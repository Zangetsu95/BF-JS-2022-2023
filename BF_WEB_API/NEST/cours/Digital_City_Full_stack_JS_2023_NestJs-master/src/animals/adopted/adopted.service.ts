import { HttpException, Injectable } from '@nestjs/common';
import { error } from 'console';
import { AdoptedDTO } from 'src/shared/DTO/adopted/adopted.dto';

@Injectable()
export class AdoptedService {
  listAdopted: AdoptedDTO[] = [
    {
      name: 'pupuce',
      category: 'Chat',
      age: '5 ans',
      family: 'Montecristo',
      contact: '+321234568',
    },
    {
      name: 'pepito',
      category: 'Chien',
      age: '3 ans',
      family: 'Mugiwara',
      contact: '+329876541',
    },
    {
      name: 'Perry',
      category: 'Ornithorinque',
      age: '5 ans',
      family: 'Heinz Doofenshmirtz',
      contact: '+4705236585485621',
    },
  ];

  getAll(): Promise<AdoptedDTO[]> {
    return new Promise<AdoptedDTO[]>((resolve, reject) => {
      if (this.listAdopted.length == 0) reject();
      else resolve(this.listAdopted);
    }).catch((error) => {
      throw new HttpException('List corrupted', 500);
    });
  }
}
