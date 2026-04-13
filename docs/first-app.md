# First app

This page guides you through your first app using MeltedForge's core.
It is a quick guide to get a gist of how things get going, and this is not a full tutorial or a complete 
documentation. It is meant to get things up and running as soon as possible while also explaining things and there alternatives.

!!! Info
    For this guide, it is recommended to have some basic knowledge of C and a little bit about graphics rendering since things may get a little technical.

---

## Entry point

When using MeltedForge, you won't be writing the usual `main()` function. Instead, it is expected from the client 
it provides a implementation of the function `mfClientCreateAppConfig`. Here is its signature: 

```c title="main.c"

#define MF_INCLUDE_ENTRY
#include <mf.h>

MFAppConfig mfClientCreateAppConfig() {
    ... // Client code
}

```

!!! Info
    For getting the engine core's API declarations, including only `mf.h` should suffice.

!!! Info
    The macro `MF_INCLUDE_ENTRY` should be defined before including `mf.h`, only in a single .c/.cpp file of the client, since it signals the engine to enclude the `main` function. This is because there might be multiple .c/.cpp files including `mf.h` which would instead create multiple definitions of the `main` function.

---

## The app config

The `mfClientCreateAppConfig` is expected to return a typedefed struct called `MFAppConfig`, which contains 
function pointers to common functions like initApp, runApp, etc. and options like enableDepth, enableUI, etc.

But in this guide, we won't be focusing on creating a custom app with custom app related function pointers. Instead 
we will be using the engine's `mfCreateDefaultApp(const char* appName)` which will generate a `MFAppConfig` for us. This generated app config has very minimal features by itself but can still be heavily customized.

Here is the minimum setup:

```c title="main.c"
#define MF_INCLUDE_ENTRY
#include <mf.h>

MFAppConfig mfClientCreateAppConfig() {
    MFAppConfig config = mfCreateDefaultApp("First app using MeltedForge!!");
    config.winConfig.resizable = true; // Setting the window so that it can be resized. By default this is set to false.
    config.enableDepth = true; // Enabling depth buffering (for 3D rendering). By default this is set to false.

    return config;
}

```

Since already mentioned, the default app it very minimal and doesn't do *anything* visually.  
So you should see something like this: 

![image](assets/firstapp-0.png)