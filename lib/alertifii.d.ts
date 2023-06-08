import { IResponse } from './request';
declare type Priority = -2 | -1 | 0 | 1 | 2;
export interface INotificationData {
    user: string;
    token: string;
    device?: string;
    url?: string;
    url_title?: string;
    timestamp?: number;
    html?: 1;
    title: string;
    message: string;
    sound: Sound;
    priority: number;
    expire: number;
    retry: number;
    file?: {
        name: string;
        filePath: string;
    };
}
declare type Sound = 'alertifii' | 'bike' | 'bugle' | 'cashregister' | 'classical' | 'cosmic' | 'falling' | 'gamelan' | 'incoming' | 'intermission' | 'magic' | 'mechanical' | 'pianobar' | 'siren' | 'spacealarm' | 'tugboat' | 'alien' | 'climb' | 'persistent' | 'echo' | 'updown';
export declare class Alertifii {
    private _hostname;
    private _path;
    private _notification;
    constructor(integration_id: string, destination_id?: string);
    setDevice(device: string): Alertifii;
    setHtml(): Alertifii;
    setTitle(title: string): Alertifii;
    setMessage(message: string): Alertifii;
    setSound(sound: Sound): Alertifii;
    setAttachment(name: string, filePath: string): Alertifii;
    setPriority(priority: Priority, expire?: number, retry?: number): Alertifii;
    setUrl(url: string, title?: string): Alertifii;
    setTimestamp(timestamp: number): Alertifii;
    send(title?: string, message?: string): Promise<IResponse>;
}
export {};
//# sourceMappingURL=alertifii.d.ts.map