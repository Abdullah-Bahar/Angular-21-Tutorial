# :rocket: Angular 21 Tutorial

## :book: İçindekiler

- [Proje Hakkında](#bulb-proje-hakkında)
- [Canlı Demo](#globe_with_meridians-canlı-demo)
- [İçerdiği Konular](#mortar_board-i̇çerdiği-konular)
- [Proje Özellikleri](#gear-proje-özellikleri)
- [Kurulum ve Çalıştırma](#computer-kurulum-ve-çalıştırma)
- [Github Pages İle Yayınlama](#github-pages-ile-yayınlama)
- [Kaynaklar]()

## :bulb: Proje Hakkında

Bu repository, **Angular 21** öğrenirken yaptığım alıştırma ve küçük projeleri içermektedir.
Projenin temel amacı, Angular çerçevesinin modern özelliklerini adım adım öğrenmek ve pratikte uygulayabilmektir.

Projeler, aşağıdaki YouTube oynatma listesi üzerinden takip edilen derslere dayanmaktadır :
[Angular 21 Tutorial Playlist](https://www.youtube.com/playlist?list=PL7JmcZV0UQtU12drXHGDswOGNhEdXA4RO)

## :globe_with_meridians: Canlı Demo

Projeyi canlı olarak aşağıdaki bağlantıdan görüntüleyebilirsiniz:

:point_right: Live Demo :
https://abdullah-bahar.github.io/Angular-21-Tutorial/

## :mortar_board: İçerdiği Konular

Proje kapsamında işlenen ve örnekleri ile uygulanan başlıca konular şunlardır :

- Component yapısı ve bileşenler arası iletişim
- Template ve Data Binding (Interpolation, Property & Event Binding)
- Angular Directives
- Reactive Forms ve Template-driven Forms
- Angular Services ve Dependency Injection
- HTTP İstekleri ve API Entegrasyonu 
- Angular Lifecycle Hooks

## :gear: Proje Özellikleri

Bu porje [Angular CLI](https://github.com/angular/angular-cli) versiyon 21.0.0 kulllanılarak oluşturulmuştur.

## :computer: Kurulum ve Çalıştırma

1. Repository'yi klonlayın :

```bash
	git clone https://github.com/Abdullah-Bahar/Angular-21-Tutorial.git
```

2. Proje klasörüne girin :

```bash
	cd Angular-21-Tutorial
```

3. Bağımlılıkları yükleyin :

```bash
	npm install
```

4. Uygulamayı çalıştırın :

```bash
	ng serve --open
```
## GitHub Pages ile Yayınlama

Bu proje GitHub Pages üzerinde yayınlanmaktadır.

Deployment işlemi için aşağıdaki adımlar uygulanmıştır :

1. Paketin kurulması :

```bash
ng add angular-cli-ghpages
```

2. Production build alınması :

```bash
ng build --configuration production
```

Build çıktısı :

> dist/Angular-21-Tutorial

3. GitHub Pages'e deploy edilmesi :

```bash
ng deploy --base-href=/Angular-21-Tutorial/
```

Bu komut şu işlemleri otomatik olarak yapar :
- Angular uygulamasını production modunda build eder
- gh-pages branch oluşturur
- build çıktısını bu branch'e ekler

4. *"angular.json"* dosyasını düzenleme :

```json
	"Angular-21-Tutorial": {
		..... 
		"root": "",
		.....
		"architect": {
			"build": {
				"builder": "@angular/build:application",
				"options": {
					"outputPath": "dist/Angular-21-Tutorial", // Bu satır eklendi
					.......
				},
			}
		}
	}
```

5. Github'taki repository'e ilgili değişiklikleri push edilir.

6. GitHub Pages ayarı

*Settings -> Pages* yolunda ilgili ayarlamalar yapılır : (Eğer otomatik olduysa olduğu gibi bırakılır)
- Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

## Kaynaklar

- Github Pages :
	- https://angular.dev/tools/cli/deployment 
	- https://javascript.plainenglish.io/how-to-deploy-an-angular-19-application-to-github-pages-e7dfb714cfcb
	- https://gist.github.com/AtienoObwanda/a8af0086b7bbbd93b3b3630d385c9b72