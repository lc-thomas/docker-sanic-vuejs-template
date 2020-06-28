#!/bin/bash

# This is for SELinux which wouldn't allow access to "sources" on the host otherwise

chcon -Rt svirt_sandbox_file_t ./sources
