import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-typography',
  imports: [],
  templateUrl: './typography.html',
  styleUrl: './typography.scss'
})
export class Typography {

  protected readonly bodySizes = signal([
    's', 'm', 'xl', 'xxl'])
  protected readonly fontWeights = signal([
    'thin',
    'extra-light',
    'light',
    'regular',
    'medium',
    'semi',
    'bold',
    'extra-bold',
    'black',
  ])

  protected readonly typographyText = signal(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lectus accumsan, suscipit nisi in, ' +
    'mattis turpis. Suspendisse in lectus sit amet justo tempor fermentum. Praesent pharetra, lacus et accumsan pulvinar, ante massa rutrum nisl, ac blandit mi nisi in libero. Maecenas sodales vel ligula a dignissim. Ut sed odio ut risus aliquet tristique sit amet et lacus. Vestibulum efficitur sapien sed posuere pellentesque. Proin suscipit a lectus vitae placerat.\n' +
    'Curabitur non aliquet erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus fermentum, ' +
    'odio sed consequat dapibus, erat lacus vulputate nibh, id feugiat sem justo sed diam. Vestibulum porttitor, odio ' +
    'quis sollicitudin iaculis, ante odio tempor nunc, sed rhoncus felis turpis ac libero. Duis arcu arcu, pretium non ' +
    'tortor a, mollis volutpat orci. Proin id condimentum massa, nec tincidunt est. Phasellus ut dui leo. Nunc at magna sed ' +
    'felis dictum tincidunt a at nisl. Duis in enim eu ante porttitor faucibus. Quisque eget fringilla diam, sodales ' +
    'scelerisque ante. Orci varius natoque penatibus et aecenas tincidunt placerat libero, tincidunt accumsan massa dictum vitae.' +
    ' Morbi maximus nisi non mauris viverra porta.'
  )
}
