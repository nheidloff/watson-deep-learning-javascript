from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import argparse
import sys
import time
import numpy as np
import tensorflow as tf
import codecs, json 

def read_tensor_from_image_file(file_name, input_height, input_width, input_mean, input_std):
  file_reader = tf.read_file(file_name, "file_reader")
  image_reader = tf.image.decode_jpeg(file_reader, channels = 3, name='jpeg_reader')
  float_caster = tf.cast(image_reader, tf.float32)
  normalized = tf.divide(tf.subtract(float_caster, [input_mean]), [input_std])
  return normalized

if __name__ == "__main__":
  file_name = "data/" + sys.argv[1]
  
  output = read_tensor_from_image_file(file_name, 224, 224, 128, 128)

  sess = tf.Session()
  result = sess.run(output)
  resultList = result.tolist() 
  file_path = "data/raw-payload.json" 
  json.dump(resultList, codecs.open(file_path, 'w', encoding='utf-8'), separators=(',', ':'), indent=2) 