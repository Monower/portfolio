<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DownloadCV extends Controller
{
    public function download(){
        return Storage::download('monwer_sadaf.pdf');
    }
}
