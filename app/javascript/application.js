// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

document.addEventListener('DOMContentLoaded', function() {
   
  document.getElementById('button').addEventListener('click', function() {
      document.getElementById('display-text').textContent = document.getElementById('text-input').value;
  });

});
