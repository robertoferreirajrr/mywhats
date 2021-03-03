module.exports = {
  apps: [{
    name: 'whatsappserver',
    exec_interpreter: 'node@10.15.3',
    script: 'index.js',
    node_args: '--max_old_space_size=50'
  }]
}
