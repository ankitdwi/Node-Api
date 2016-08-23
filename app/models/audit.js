
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var auditLogSchema = new mongoose.Schema({
    device_os: String,
    device_type: String,
    module_id: String,
    action_id: String,
    details: String,
    application: String,
    browser: String,
    ip_address: String,
    location: String,
    organization_id: String,
    User_ID: String
});

// Return model
module.exports = restful.model('Audit', auditLogSchema);
