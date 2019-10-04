/**
* Copyright 2019 IBM
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
**/

var express = require('express');

var PORT = process.env.PORT;

var app = express();
app.get('/', function (req, res) {
  res.send('Welcome to IBM Cloud DevOps using containers. Lets go use the Continuous Delivery Service');
});

app.listen(PORT);
console.log(' Application Running on port' + PORT);
