import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.page.html',
  styleUrls: ['./set-up.page.scss'],
})
export class SetUpPage implements OnInit {

  constructor() { }

  ngOnInit() {}

  // Request Camera Permission
  async requestCameraPermission() {
    try {
      const permission = await Camera.requestPermissions();
      console.log('Camera Permission:', permission);
      if (permission.camera === 'granted') {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
    }
  }

  // Request Location Permission
  async requestLocationPermission() {
    try {
      const permission = await Geolocation.requestPermissions();
      console.log('Location Permission:', permission);
      if (permission.location === 'granted') {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  }

  // Request Media/File Permission
  async requestFilePermission() {
    try {
      if (Capacitor.getPlatform() === 'android') {
        // Use Filesystem plugin on Android
        const result = await Filesystem.requestPermissions();
        console.log('Filesystem Permission:', result);
        if (result.publicStorage === 'granted') {
          console.log('File permission granted');
        } else {
          console.log('File permission denied');
        }
      } else {
        console.log('Filesystem permission is not required on this platform');
      }
    } catch (error) {
      console.error('Error requesting file permission:', error);
    }
  }

  // Start the app and perform navigation or other actions
  start() {
    console.log('Mulai aplikasi...');
    // Add logic for navigating or performing other actions after permissions are granted
  }
}
