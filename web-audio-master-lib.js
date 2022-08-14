/**
 * Loaded Audio Object With Tag
 */
let LOADED_AUDIO =
[
  { tag: '', object: new Audio() }
];
LOADED_AUDIO = [];

/**
 * Audio Tag and Audio Source URL struct
 */
const SrcWithTag =
{
  /**
   * Tag for Audio Object
   */
  tag : '',
  /**
   * Audio Object
   */
  src : ''
}

/**
 * Audio Master Library for iOS and Android and PC
 * @name AudioMasterLib
 * @author shopipi
 */
class WebAudioMasterLib
{
  /**
   * Init Audio Object
   * @param { SrcWithTag } srcWithTag SrcWithTag
   */
  static init(srcWithTag)
  {
    LOADED_AUDIO.push({ tag: srcWithTag.tag, object: new Audio(srcWithTag.src) });
  }

  /**
   * Ready to Play Audio Object (Call This Method on user interact event)
   * @param { string } tag Tag for Audio Object
   */
  static ready_to_play(tag)
  {
    for (const e of LOADED_AUDIO)
    {
      if (e.tag === tag)
      {
        e.object.play();
        e.object.pause();
      }
    }
  }

  /**
   * Play Audio Object
   * @param { string } tag Tag for Audio Object
   * @param { number } volume Audio Volume
   */
  static play(tag, volume = 1)
  {
    for (const e of LOADED_AUDIO)
    {
      if (e.tag === tag)
      {
        e.object.volume = volume;
        e.object.play();
      }
    }
  }

  /**
   * Pause Audio Object
   * @param { string } tag Tag for Audio Object
   */
  static pause(tag)
  {
    for (const e of LOADED_AUDIO)
    {
      if (e.tag === tag)
      {
        e.object.pause();
      }
    }
  }

  /**
   * Stop Audio Object
   * @param { string } tag Tag for Audio Object
   */
  static stop(tag)
  {
    for (const e of LOADED_AUDIO)
    {
      if (e.tag === tag)
      {
        e.object.pause();
        e.object.currentTime = 0;
      }
    }
  }
}
