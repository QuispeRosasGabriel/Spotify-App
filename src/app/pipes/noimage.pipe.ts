import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return "https://image.shutterstock.com/image-vector/no-image-available-sign-internet-260nw-261719003.jpg"
    }
    if (images.length > 0) {
      return images[0].url
    }
    else {
      return "https://image.shutterstock.com/image-vector/no-image-available-sign-internet-260nw-261719003.jpg"
    }
  }

}
