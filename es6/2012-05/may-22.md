# May 22, 2012 Meeting Notes
-----

This pre-dates the recording of a complete attendees list. 

-----

## Binary Data

Dave Herman:
  - explains CPU -> GPU
  - state of endianness
  - leading into DataView

  web being written as little endian

  cpu little endian
  file format big endian

  should default for DataView be changed to little endian?

  can it be changed still?


Yehuda Katz:

  - Is this a compelling issue to address?
  - Agrees we should default to little endian
  - Hard to reason about this subject matter?

Allen Wirfs-Brock:

  - Applies to many things you may program


Luke Hoban:

  - Historically, binary data wasn't accessible
  - Now there is more need
  -


YK:

  - Are we expecting a large use case for binary data?


DH:

  - I do expect that this will be the beginning of a larger use
  -

LH:

  - Not sure about q?

AWB:

  - Historic debate


General discussion about real use cases...


DH, AWB:

  - Agree that most developers are not going to understand the difference
    between endianness

DH:

  - Explains float explorer that checked little endianness


LH, DH:

  - Expect big endianness as well as more common little endianness


DH:

  - File <-> CPU is the well define use case for little endianness
  - webGL is determined by system

  - Doesn't have raw data, colleagues have evidence of assumed little endianness - without checks

  - So what happens when people are implementing for big endianness?
  - Game consoles have little endian modes

  - How robust is that harder support? Unknown

  - Alternative: Instead of allocating little, work harder to simulate little
    when shader is compiled, implement byte swapping.

  - There is no one making the case - but the web is illustrating the behaviour

YK:

  - Will this limit the discover-ability?

DH:

  - If we make it little, you will no longer be able to discover endianness
  - Willing to do this and see what happens, if there are performance issues - they can be addressed


AWB:

  - If we're talking about integers, this is easy, but eg. doubles, there is more complexity


DH, AWB:

  - Resolving Float 32


DH:

  - What does the CPU want or expect?
  - Let's standardize what the web is doing.

AWB:

  - Yes.
  - If you know you need big endian, you'll do the conversion


DH:

  - Beneficial for File apis that use DataView



Standardize Little Endian? No opposition.


Erik Arvidsson, YK:

  - A defacto standard.


LH:

  - Are there going to be big endian browser environments?


DH:

  - Broadly speaking, little endian has already won
  - Regardless of standardization, this is becoming the defacto standard.
  - Hardware support likely to get better and better
  - Solving a problem that doesn't exist, but leaving unspecified will
    create new issues


Bill, Brendan Eich:

  - XBox, PS3... binary streams are big endian


DH:

  - People are upset at disparity

  - Change DataView default to little endian?

  Stance: not changing DataView


BE:

  - Historical insight of Big, Little, Bi endian
  - Consistency is not the argument


DH:

  - Consider extending the API to allow for opt-in to correct endianness
  - Rather leave this out until the need is known


YK:

  - More clarification regarding the observable effects in webGL


DH:

  - Likely no observable change
  - Disregard the casting of types, use the default, ship to GPU

YK:

  - Can we eliminate the observable effects?

DH:

  - No...
  - If we say the web is big endian...

  CPU             GPU
  [ L, , , H ] -> [ L, , , H ]

  If we say little endian...

  [ H, , , L ] -> transform -> [ L, , , H ]



YK:

  Summary...



Doug Crockford:

  - What if we just leave it out?


BE:

  - Another spec will emerge, divergence


DH:

  - Yes, this is in kronos


BE:

  - Low level byte order less important


DH:

  - Getting into new work
  - When you have richer type information, good things happen and
    become available.


DC:

  - I love this, tell me more


DH:

  - In typeed arrays, thhere are two typed of data structures:

    DataView -


    ArrayBufferView - not an "array"


    ArrayBuffer is a bucket of bytes

    can be wrapped with as many ArrayBufferViews of any type and can all point to different sub range of the buffer, can access and modify bytes in the range


    Add new views:

    StructView

    atomic types
      - uint8

    array( uint8 )

    Can extend typed arrays...


    S = Struct({

      x: uint8,
      y: uint8

    });

    * does not create a struct object, creates a struct type


    x = new S

    creates a new instance of this struct type

    A = Array( S )

    creates a new type, not instance



BE, DH, YK:

  - currently, it's "malloc"



DH:

  - This is not new, but we can make something new...




(stepped out, lost track...)


s = struct({
  x: uint8,
  y: uint32
})

d = new DV(buf, o)

v = d.get(s, 17)


v...

  x
    ----> object pointing to offset starting at 17
  y
