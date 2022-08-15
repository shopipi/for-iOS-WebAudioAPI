# for-iOS-WebAudioAPI
- You can play Audio at SPECIFIC time when you want. Works on iOS Safari and other platforms.
- iOS環境で任意のタイミングで音を鳴らすためのライブラリです。ほかのプラットフォームでも使用可能です。

### Usage

1.
- en: Register AudioObject, With Tag. (in user interact event.)
- ja: タグを使用してAudioObjectを登録します。(ユーザーアクションイベント内で呼び出し）
```js
$('button').on('touchstart', function()
{
  // Register BGM
  // BGMの登録（呼び出し一回のみ）
  AudioObject.register(AudioTag.SKY_HIGH);

  // Register SE
  // 効果音の登録（オブジェクトを使いまわす数分だけ登録）
  AudioObject.register('bomb', 'expl.mp3');
  AudioObject.register('bomb', 'expl.mp3');
  AudioObject.register('bomb', 'expl.mp3');
  AudioObject.register('bomb', 'expl.mp3');
  AudioObject.register('bomb', 'expl.mp3');
});
```

2. 
- en: Play Sound Specific Time You WANT!
- ja: 好きなタイミングで再生が可能！
```js
function startGame()
{
  AudioObject.getObjectByTag(AudioTag.SKY_HIGH).play();
}

function onDead()
{
  AudioObject.getObjectByTag('bomb').play();
}
```
