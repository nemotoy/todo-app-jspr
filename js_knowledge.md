# knowledge

## Lists

* ECMAScript/Javascript：ECMAScriptは実行環境毎で共通部分、Javascriptは固有機能も含む。
* Version：ES2015で仕様策定プロセスが変更されて以降、毎年アップデートされている。
* Transpiler：ソースコードからソースコードへ変換するツール。（e.g. Babel, TypeScript）
* Module bundler：JavaScriptのモジュール依存関係を解決し、複数のモジュールを1つのJavaScriptファイルに結合するツール。（e.g. Webpack, Rollup）
* variables（let, const, var）：const, letはES2015から導入。constは再代入不可、letは可能。変数定義の検討は、const -> letの順番が推奨されている。
* functions
* this(bind)：実行場所で異なる。
  * 実行コンテキスト：トップレベルにおいては、コンテキストの把握が面倒なので積極的に使うべきではない。
    * スクリプト：グローバルオブジェクト（ブラウザの場合は *window* 、Node.jsの場合は *global*） 
    * モジュール：常に *undefined* 
  * コンストラクタ：TBD
  * 関数とメソッド（Arrow Function以外）：ベースオブジェクト。関数はない。メソッドは *obj.method()* で呼び出す際の *obj* を指す。通常、thisは定義した時ではなく、実行した時に決定される。解決法は、 *call*, *apply*, *bind* メソッドを使用する。
  * Arrow Function：定義時に決定する。暗黙的な引数として受け付けない。

## Peripheral technology

* formatter
  * [Prettier](https://prettier.io/)
* linter
  * [ESlint](https://eslint.org/)
* test
  * [Mocha](https://mochajs.org/)
* dep manager
* build
