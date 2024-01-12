import { Howl } from 'howler';
import io from 'socket.io-client';

const infoElement = document.getElementById('info');

const socket = io(); 

function emitNotificationSound() {
  const sound = new Howl({
    src: ['ruta-al-sonido/notificacion.mp3'],
  });
  sound.play();
}

function readInformationAloud() {
  const textToRead = infoElement.innerText;
  const speech = new SpeechSynthesisUtterance(textToRead);
  window.speechSynthesis.speak(speech);
}

function addNewInformation(newInfo) {
  emitNotificationSound();
  infoElement.innerText = newInfo;
  readInformationAloud();
}


socket.on('newInfo', (info) => {
  addNewInformation(info);
});