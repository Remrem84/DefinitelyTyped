/**
 * Created by remigomez on 21/07/2015.
 */

declare module plugin.google.maps {

    var Map : any;
    var LatLng : any;

    export enum event {
        MAP_READY,
        MARKER_CLICK,
        OVERLAY_CLICK
    }
}
