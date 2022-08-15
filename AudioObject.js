/**
 * Audio Tag for Audio Source
 */
const AudioTag =
{
  SKY_HIGH : 'SkyHigh.mp3'
};

/**
 * Audio Source Prefix
 */
const AUDIO_RESOURCE_PREFIX = 'Resources/Audio/';

/**
 * AudioObject Class
 * @name AudioObject
 * @author shopipi
 */
class AudioObject
{
  static ALL = [];

  /**
   * Register AudioObject With Tag
   * @param { string } tag Tag for AudioObject
   * @param { string } src Audio Source URL
   */
  static register(tag, src = tag)
  {
    AudioObject.ALL.push({ tag: tag, audioObject: new AudioObject(AUDIO_RESOURCE_PREFIX + src) });
  }
  
  /**
   * Get AudioObject by Tag
   * @param { string } tag Tag for AudioObject
   * @returns { AudioObject } AudioObject Instance
   */
  static getObjectByTag(tag)
  {
    for (const e of AudioObject.ALL)
    {
      if (e.tag === tag && e.audioObject.isEndedPlay())
      {
        return e.audioObject;
      }
    }

    return null;
  }
  
  constructor(src, repeat = false)
  {
    this.src    = src;
    this.audio  = new Audio(src);
    this.repeat = repeat;
    this.timer  = null;

    /**
     * Audio End Event
     */
    this.onEnded = function(){};

    /**
     * Ready to Play
     */
    this.audio.play();
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  /**
   * Play Audio
   * @param { number } startTime Start Time
   * @param { number } volume Volume
   * @returns 
   */
  play(startTime = -1, volume = 1)
  {
    /**
     * 強制セット
     */
    if (startTime >= 0)
    {
      this.audio.currentTime = 0;
    }
    
    /**
     * 音量セット
     */
    this.audio.volume = volume;

    /**
     * 再生
     */
    this.audio.play();

    /**
     * ループ時は再生終了を取得しない
     */
    if (this.audio.loop) return;
    
    /**
     * Audio終了取得タイマー
     */
    this.timer = setInterval(() =>
    {
      /**
       * 終了時
       */
      if (this.audio.currentTime >= this.audio.duration - 0.1)
      {
        this.audio.currentTime = 0;
        this.audio.pause();
        this.onEnded();
        clearInterval(this.timer);
      }
    }, 10);
  }

  /**
   * Get Audio Has Ended to Play
   * @returns Ended to Play
   */
  isEndedPlay()
  {
    return this.audio.paused;
  }
}
