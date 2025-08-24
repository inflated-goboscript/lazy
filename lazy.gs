%if not _FARETEK_INCLUDE_LAZY
%define _FARETEK_INCLUDE_LAZY

%define pen_du pen_down;pen_up

proc change_xy dx, dy {
    # Even with tw no fencing enabled, this is not equivalent to change x by dx; change y by dy;
    # because it causes differences when the pen is down
    goto x_position() + $dx, y_position() + $dy;
}

%define onbool(b) ontimer > 0.0000000000001 / (b)
%endif
