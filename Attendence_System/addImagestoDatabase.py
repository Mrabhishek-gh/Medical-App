import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from firebase_admin import storage

cred = credentials.Certificate("Attendence_System\serviceAccountKey.json")
firebase_admin.initialize_app(cred,{
    'databaseURL':"https://medical-appointment-scheduler-default-rtdb.asia-southeast1.firebasedatabase.app/",
    'storageBucket' : "medical-appointment-scheduler.appspot.com"
})

bucket = storage.bucket()


local_folder = "Attendence_System\Doctor-images"

def upload_image(local_path, remote_path):
    blob = bucket.blob(remote_path)
    blob.upload_from_filename(local_path)

for root, dirs, files in os.walk(local_folder):
    for file in files:
        local_path = f'{root}/{file}'
        remote_path = os.path.relpath(local_path, local_folder)
        upload_image(local_path, remote_path)

print("Upload completed.")