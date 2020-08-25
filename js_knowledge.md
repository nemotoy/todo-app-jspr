# knowledge

## Lists

- ECMAScript/Javascript：ECMAScript は実行環境毎で共通部分、Javascript は固有機能も含む。
- Version：ES2015 で仕様策定プロセスが変更されて以降、毎年アップデートされている。
- Transpiler：ソースコードからソースコードへ変換するツール。（e.g. Babel, TypeScript）
- Module bundler：JavaScript のモジュール依存関係を解決し、複数のモジュールを 1 つの JavaScript ファイルに結合するツール。（e.g. Webpack, Rollup）
- variables（let, const, var）：const, let は ES2015 から導入。const は再代入不可、let は可能。変数定義の検討は、const -> let の順番が推奨されている。
- functions
- this(bind)：実行場所で異なる。
  - 実行コンテキスト：トップレベルにおいては、コンテキストの把握が面倒なので積極的に使うべきではない。
    - スクリプト：グローバルオブジェクト（ブラウザの場合は _window_ 、Node.js の場合は _global_）
    - モジュール：常に _undefined_
  - コンストラクタ：TBD
  - 関数とメソッド（Arrow Function 以外）：ベースオブジェクト。関数はない。メソッドは _obj.method()_ で呼び出す際の _obj_ を指す。通常、this は定義した時ではなく、実行した時に決定される。解決法は、 _call_, _apply_, _bind_ メソッドを使用する。
  - Arrow Function：定義時に決定する。暗黙的な引数として受け付けない。

## Peripheral technology

- formatter
  - [Prettier](https://prettier.io/)
- linter
  - [ESlint](https://eslint.org/)
- test
  - [Mocha](https://mochajs.org/)
- dep manager
- build
