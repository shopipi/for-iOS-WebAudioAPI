# web-audio-master-lib
- You can play Audio any timing when you want. Works on iOS Safari and other platforms.
- iOS環境で任意のタイミングで音を鳴らすためのライブラリです。ほかのプラットフォームでも使用可能です。

### Usage

1. Define Your Own Tag.
```js
const AudioTag =
{
  HAPPY_SOUND_MP3 : 'HappySound.mp3',
  BOMB_SE_MP3     : 'Bomb.mp3'
};
```

2. Init Audio.
```js
WebAudioMasterLib.init({ tag: AudioTag.HAPPY_SOUND_MP3, src: 'res/audio/' + AudioTag.HAPPY_SOUND_MP3 });
WebAudioMasterLib.init({ tag: AudioTag.BOMB_SE_MP3, src: 'res/audio/' + AudioTag.BOMB_SE_MP3 });
```

3. Get ready to play Audio on User Interact Event.
```js
$('.start-btn').on('touchend', function(e)
{
  WebAudioMasterLib.ready_to_play(AudioTag.HAPPY_SOUND_MP3);
});
```
4. Play Audio When You WANT!
```js
function on_game_cleared()
{
  WebAudioMasterLib.play(AudioTag.HAPPY_SOUND_MP3);
}
```
