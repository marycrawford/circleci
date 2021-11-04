# CIrcleCi Challenge4

To determine the memory of the processes running in this container I ran the a docker stat command 
`docker stats` 

I saw the following container id ``
2394f199b9f2884350cb791c39684f4d7bef0802a23ba4aeff7ad890cbfbb552
``

I used this container id to get the status of the Circleci/Challenge4 container memory
``
There are containers that are using ~30-50.53% of memory.
CONTAINER ID   NAME            CPU %     MEM USAGE / LIMIT    MEM %     NET I/O     BLOCK I/O         PIDS
2394f199b9f2   musing_swartz   0.00%     1006MiB / 1.944GiB   50.53%    936B / 0B   30.3MB / 32.8kB   9
``

You can see it is using 50.53% of memory.  To kill the container using a lot of memory you can use the `docker kill 2394f199b9f2` command.  If you do another `docker stats` you will see there are no processes running for this container.

``
2394f199b9f2884350cb791c39684f4d7bef0802a23ba4aeff7ad890cbfbb552 --no-stream
CONTAINER ID   NAME            CPU %     MEM USAGE / LIMIT   MEM %     NET I/O   BLOCK I/O   PIDS
2394f199b9f2   musing_swartz   0.00%     0B / 0B             0.00%     0B / 0B   0B / 0B     0
``

What if there are other containers that we missed?  It is a good practice to always double check.  The `docker ps -q | xargs docker stats --no-stream` command can assist with ensuring there are no other containers running with high memory usage.  In this case, we can see the `festive_buck` and `estatic_visvesvaraya` are also using a lot of CPU.

``
CONTAINER ID   NAME                    CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
024b60b865ca   festive_buck            0.00%     202.4MiB / 1.944GiB   10.17%    1.08kB / 0B       31.7MB / 32.8kB   6
9673c3977423   ecstatic_visvesvaraya   0.00%     440.6MiB / 1.944GiB   22.14%    1.08kB / 0B       26.8MB / 32.8kB   8
5b60a3a94363   friendly_booth          0.00%     608KiB / 1.944GiB     0.03%     1.08kB / 0B       160kB / 0B        2
6e5e87494ea8   objective_bartik        0.00%     604KiB / 1.944GiB     0.03%     1.15kB / 0B       65.5kB / 0B       2
4d14ea78befe   sweet_ride              0.05%     872KiB / 1.944GiB     0.04%     1.15kB / 0B       485MB / 0B        1
b9b89efddea0   romantic_fermi          0.02%     952KiB / 1.944GiB     0.05%     1.29kB / 0B       505MB / 0B        1
3c2c6bd55150   zealous_vaughan         0.02%     848KiB / 1.944GiB     0.04%     1.29kB / 0B       1.44GB / 0B       1
bdcb19c3e122   stoic_taussig           0.04%     1.504MiB / 1.944GiB   0.08%     1.29kB / 0B       538MB / 0B        1
e0952f698e09   kind_buck               0.03%     884KiB / 1.944GiB     0.04%     1.71kB / 0B       736MB / 0B        1
605ba58494fc   strange_goldstine       0.00%     1.23MiB / 1.944GiB    0.06%     74.7MB / 1.22MB   12.3kB / 179MB    5
``

These containers can be killed in one command `docker kill 024b60b865ca 9673c3977423`.

Double check to ensure the containers are terminated by typing `docker ps -q | xargs docker stats --no-stream`.

Now we can see there are no containers running that are using more than `0.04%` of memory. Yippeee!! :)

``
CONTAINER ID   NAME                CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O        PIDS
5b60a3a94363   friendly_booth      0.00%     608KiB / 1.944GiB     0.03%     1.08kB / 0B       160kB / 0B       2
6e5e87494ea8   objective_bartik    0.00%     604KiB / 1.944GiB     0.03%     1.15kB / 0B       65.5kB / 0B      2
4d14ea78befe   sweet_ride          0.04%     872KiB / 1.944GiB     0.04%     1.15kB / 0B       485MB / 0B       1
b9b89efddea0   romantic_fermi      0.02%     952KiB / 1.944GiB     0.05%     1.29kB / 0B       505MB / 0B       1
3c2c6bd55150   zealous_vaughan     0.03%     848KiB / 1.944GiB     0.04%     1.29kB / 0B       1.44GB / 0B      1
bdcb19c3e122   stoic_taussig       0.03%     1.504MiB / 1.944GiB   0.08%     1.29kB / 0B       538MB / 0B       1
e0952f698e09   kind_buck           0.03%     884KiB / 1.944GiB     0.04%     1.78kB / 0B       736MB / 0B       1
605ba58494fc   strange_goldstine   0.00%     1.23MiB / 1.944GiB    0.06%     74.7MB / 1.22MB   12.3kB / 179MB   5
``

There are other ways you can use to kill a container.  You could also use the container name such as `docker exec -ti musing_swartz kill`.

