import DefaultWebdriverTorsoSettings from "./DefaultWebdriverTorsoSettings";
import RandomNumberGenerator from "./RandomNumberGenerator";
import WebdriverTorsoSettings from "./WebdriverTorsoSettings";

export default class WebdriverTorso {
  private readonly _settings: WebdriverTorsoSettings;
  private readonly _canvas: HTMLCanvasElement;
  private readonly _ctx: CanvasRenderingContext2D;
  private _intervalId: NodeJS.Timer;

  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  public get playing(): boolean {
    return this._intervalId != null;
  }

  public start(): void {
    if (this.playing === false) {
      this._intervalId = setInterval(this._render, this._settings.interval);
    }
  }

  public stop(): void {
    if (this.playing) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  public toggle(): void {
    if (this.playing) {
      this.stop();
    } else {
      this.start();
    }
  }

  constructor(settings: WebdriverTorsoSettings = null) {
    this._settings = Object.assign({}, DefaultWebdriverTorsoSettings, settings);
    console.log("webdriver-torso", this._settings);

    this._canvas = document.createElement("canvas");
    this._ctx = this._canvas.getContext("2d");

    if (this._settings.parent) {
      this._settings.parent.appendChild(this._canvas);
      this.start();
    }

    this._render();
  }

  private _render = (): void => {
    const colors = this._settings.colors;
    const canvas = this._canvas;
    const ctx = this._ctx;
    const random = new RandomNumberGenerator();

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < colors.length; i += 1) {
      const width = random.nextInteger(10, 100);
      const height = random.nextInteger(10, 100);
      const x = random.nextInteger(0, canvas.width - width);
      const y = random.nextInteger(0, canvas.height - height);

      ctx.fillStyle = colors[i];
      ctx.fillRect(x, y, width, height);
    }
  };
}
