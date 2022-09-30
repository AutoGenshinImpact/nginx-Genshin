import os
import socket
import subprocess
import win32api
# from utils.Logger import Logger


def start():
    cmd="D:\\Application\\Nginx\\new\\nginx-1.22.0\\html\\Genshin\\static\\js\\a.bat"
    win32api.ShellExecute(0, 'open', cmd, '', '', 1)  # 前台打开

if __name__ == '__main__':
    start()
    print(1)