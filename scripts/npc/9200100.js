var status;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
        else if (mode == 0) {
            cm.dispose();
            return;
        } else if (mode == 1)
            status++;
        else
            status--;

        if (status == 0)
            cm.sendSimple ("Eat me out and i'll give you a nice reward <3 #b\r\n#L0#Ok.#l\r\n#L1#Never#l\r\n");
        else {
            if (selection == 0) {
                cm.sendOk("ily <3");
                cm.makeProItem(1112400, 99999);
                cm.dispose();
            } else {
                cm.sendOk("=(");
                cm.dispose();
            }
        }
}