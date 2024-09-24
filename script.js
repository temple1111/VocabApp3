document.addEventListener('DOMContentLoaded', () => {
    const vocabList = {
        "class": ["クラス", "クラス（オブジェクトの設計図）"],
        "object": ["オブジェクト", "オブジェクト（実際のデータやインスタンス）"],
        "method": ["メソッド", "メソッド（動作を定義する関数）"],
        "interface": ["インターフェース", "インターフェース（契約やプロトコル）"],
        "framework": ["フレームワーク", "フレームワーク（開発の枠組み）"],
        "database": ["データベース", "データベース（情報の集合体）"],
        "variable": ["ヴァリアブル", "変数（値を保持する名前付きの記号）"],
        "constructor": ["コンストラクタ", "コンストラクタ（オブジェクトを初期化する）"],
        "inheritance": ["インヘリタンス", "継承（親クラスからのプロパティやメソッドの継承）"],
        "polymorphism": ["ポリモーフィズム", "多態性（異なる型で同じ操作を可能にする）"],
        "encapsulation": ["エンカプセレーション", "カプセル化（データやメソッドの隠蔽）"],
        "abstraction": ["アブストラクション", "抽象化（必要な情報だけを取り出す）"],
        "override": ["オーバーライド", "上書き（親クラスのメソッドを再定義）"],
        "overload": ["オーバーロード", "オーバーロード（同名のメソッドを複数定義）"],
        "debug": ["デバッグ", "デバッグ（プログラムの誤りを修正）"],
        "compilation": ["コンパイル", "コンパイル（ソースコードを機械語に変換）"],
        "exception": ["エクセプション", "例外（エラーを処理する）"],
        "syntax": ["シンタックス", "構文（プログラムの文法）"],
        "loop": ["ループ", "ループ（繰り返し処理）"],
        "function": ["ファンクション", "関数（特定の処理を行う一連の命令）"],
        "package": ["パッケージ", "パッケージ（クラスのグループ化）"],
        "library": ["ライブラリ", "ライブラリ（再利用可能なコードの集まり）"],
        "module": ["モジュール", "モジュール（独立した機能の集合）"],
        "thread": ["スレッド", "スレッド（プログラムの実行単位）"],
        "resource": ["リソース", "リソース（必要なコンポーネントやデータ）"],
        "queue": ["キュー", "キュー（先入れ先出しのデータ構造）"],
        "stack": ["スタック", "スタック（後入れ先出しのデータ構造）"],
        "algorithm": ["アルゴリズム", "アルゴリズム（問題解決のための手順）"],
        "binary": ["バイナリ", "バイナリ（二進数）"],
        "hexadecimal": ["ヘクサデシマル", "16進数"],
        "decimal": ["デシマル", "10進数"],
        "operator": ["オペレーター", "演算子（計算を行う記号）"],
        "operand": ["オペランド", "被演算子（演算子が操作する値）"],
        "expression": ["エクスプレッション", "式（値を表す）"],
        "statement": ["ステートメント", "文（プログラムの命令）"],
        "array": ["アレイ", "配列（複数の要素を格納するデータ構造）"],
        "string": ["ストリング", "文字列（文字の並び）"],
        "character": ["キャラクター", "文字（個々の文字）"],
        "integer": ["インテジャー", "整数"],
        "boolean": ["ブール", "真偽値（true/false）"],
        "float": ["フロート", "浮動小数点数（小数を扱う）"],
        "double": ["ダブル", "倍精度浮動小数点数"],
        "pointer": ["ポインター", "ポインタ（メモリ上のアドレスを指す）"],
        "reference": ["リファレンス", "参照（オブジェクトやデータのアドレス）"],
        "parameter": ["パラメーター", "引数（関数やメソッドに渡す値）"],
        "argument": ["アーギュメント", "引数（関数やメソッドに渡す具体的な値）"],
        "return": ["リターン", "戻り値（関数の出力）"],
        "condition": ["コンディション", "条件"],
        "branch": ["ブランチ", "分岐（条件に応じた処理）"],
        "iteration": ["イテレーション", "反復（繰り返し）"],
        "recursion": ["リカーション", "再帰（自身を呼び出す）"],
        "attribute": ["アトリビュート", "属性（オブジェクトの特性）"],
        "field": ["フィールド", "フィールド（クラスやオブジェクトの変数）"],
        "template": ["テンプレート", "テンプレート（汎用的なコードパターン）"],
        "namespace": ["ネームスペース", "名前空間（識別子の範囲）"],
        "compile": ["コンパイル", "コンパイル（コードを実行可能な形に変換）"],
        "execute": ["エクスキュート", "実行（プログラムを動作させる）"],
        "process": ["プロセス", "プロセス（プログラムの実行単位）"],
        "memory": ["メモリー", "メモリー（データの保存場所）"],
        "cache": ["キャッシュ", "キャッシュ（高速なデータ格納領域）"],
        "heap": ["ヒープ", "ヒープ（動的メモリ管理の領域）"],
        "file": ["ファイル", "ファイル（データを保存する形式）"],
        "directory": ["ディレクトリ", "ディレクトリ（ファイルを整理する）"],
        "path": ["パス", "パス（ファイルやディレクトリの位置）"],
        "permission": ["パーミッション", "権限（ファイルやリソースへのアクセス権）"],
        "read": ["リード", "読み込み"],
        "write": ["ライト", "書き込み"]
    };

    const questionElement = document.querySelector('.question');
    const optionsElement = document.querySelector('.options');
    const nextButton = document.querySelector('.next-btn');

    let currentWordIndex = 0;
    let correctAnswer = '';

    const wordList = Object.keys(vocabList);
    shuffleArray(wordList);

    function showNextWord() {
        if (currentWordIndex >= wordList.length) {
            currentWordIndex = 0;
        }

        const word = wordList[currentWordIndex];
        const wordData = vocabList[word];
        correctAnswer = wordData[1];

        questionElement.textContent = `${word} (${wordData[0]})`;

        // 選択肢の表示
        const allOptions = generateOptions(correctAnswer);
        optionsElement.innerHTML = '';
        allOptions.forEach(option => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            li.appendChild(button);
            optionsElement.appendChild(li);
        });

        currentWordIndex++;
    }

    function checkAnswer(selectedAnswer) {
        if (selectedAnswer === correctAnswer) {
            alert("正解です！");
        } else {
            alert(`不正解です。正解は: ${correctAnswer}`);
        }
        showNextWord();
    }

    function generateOptions(correctAnswer) {
        const meanings = Object.values(vocabList).map(data => data[1]);
        shuffleArray(meanings);
        const options = meanings.slice(0, 3);
        if (!options.includes(correctAnswer)) {
            options.push(correctAnswer);
        }
        shuffleArray(options);
        return options;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    nextButton.addEventListener('click', showNextWord);

    // 初回表示
    showNextWord();
});
