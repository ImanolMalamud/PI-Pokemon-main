solve error (for ubuntu) -  System limit for number of file watchers reached:

    sudo sysctl -w fs.inotify.max_user_watches=100000
