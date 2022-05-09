#!/usr/bin/env perl
use strict;
use warnings;
use autodie;

use Path::Tiny;

my $dir = path(".");
my $file = $dir->child("day1.txt");
my $content = $file->slurp_utf8();
my @lines = split('\n', $content);

my $count = 0;

my $last = 10000;

foreach my $i (@lines) {
  my $v = int($i);

  $count++ if ($v > $last);

  $last = $v;
}

print "$count\n";

my $len = scalar @lines;

my @threes = ();

for my $i (0 .. $len - 3) {
  push @threes, int($lines[$i])+int($lines[$i+1])+int($lines[$i+2]);
}

my $count2 = 0;

$last = 1000000;

foreach my $v (@threes) {
  $count2++ if ($v > $last);
  $last = $v;
}

print "$count2";
