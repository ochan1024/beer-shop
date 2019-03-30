import React from "react";
import { IconProps } from '../index';
export default class SvgBag extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#6e6e78',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><g fillRule="nonzero" fill="#3C3C42"><path d="M59 14V0H1v14H0v37.259A4.747 4.747 0 0 0 4.742 56h50.517A4.747 4.747 0 0 0 60 51.259V14h-1zm-2.5 0l-5.18-6.906L56.414 2H57v12h-.5zM11 14V7c0-.024-.012-.046-.014-.07a1.102 1.102 0 0 0-.036-.187c-.011-.042-.01-.085-.027-.125-.009-.022-.027-.039-.037-.061-.027-.055-.065-.102-.103-.152-.028-.036-.044-.081-.077-.113L6.414 2h47.172l-4.292 4.292c-.032.032-.049.077-.077.113-.038.05-.075.097-.102.152-.011.022-.028.038-.038.061-.017.04-.016.084-.027.125a.922.922 0 0 0-.036.187c-.002.024-.014.046-.014.07v7H11zm-5 0l3-4.001V14H6zm45-4.001L54 14h-3V9.999zM3 2h.586L8.68 7.094 3.5 14H3V2zm55 49.259A2.744 2.744 0 0 1 55.258 54H4.742A2.744 2.744 0 0 1 2 51.259V16h56v35.259z" /><path d="M42 22a1 1 0 0 0-1 1v6c0 6.065-4.935 11-11 11s-11-4.935-11-11v-6a1 1 0 1 0-2 0v6c0 7.168 5.832 13 13 13s13-5.832 13-13v-6a1 1 0 0 0-1-1z" /><path d="M20 23a1 1 0 1 0 2 0c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 1 0 2 0c0-1.103.897-2 2-2s2 .897 2 2zM42 19c-2.206 0-4 1.794-4 4a1 1 0 1 0 2 0c0-1.103.897-2 2-2s2 .897 2 2a1 1 0 1 0 2 0c0-2.206-1.794-4-4-4z" /></g></svg>;
  }

}