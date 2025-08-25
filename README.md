# TopoBDA: Towards Bezier Deformable Attention for Road Topology Understanding

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?style=flat-square&logo=github)](https://artest08.github.io/TopoBDA.github.io/)
[![Paper](https://img.shields.io/badge/Paper-PDF-red?style=flat-square&logo=adobe-acrobat-reader)](./TopoBDA_neurocomputing.pdf)
[![Journal](https://img.shields.io/badge/Journal-Neurocomputing-green?style=flat-square)](https://www.journals.elsevier.com/neurocomputing)

This repository hosts the project page for **TopoBDA: Towards Bezier Deformable Attention for Road Topology Understanding**, a research project focused on enhancing road topology understanding in autonomous driving through novel attention mechanisms.

## 🚀 Live Demo

Visit the project page: [https://artest08.github.io/TopoBDA.github.io/](https://artest08.github.io/TopoBDA.github.io/)

## 📄 Paper

The full research paper is published in **Neurocomputing** and available in PDF format: [TopoBDA_neurocomputing.pdf](./TopoBDA_neurocomputing.pdf)

## 🔬 Research Overview

TopoBDA introduces a novel **Bezier Deformable Attention (BDA)** mechanism for road topology understanding that:

- **Enhances centerline detection** through Bezier control points in deformable attention
- **Improves road topology understanding** with minimal computational overhead  
- **Integrates multi-modal sensor fusion** (Camera, LiDAR, Radar, SDMap)
- **Achieves state-of-the-art results** on OpenLane-V1 and OpenLane-V2 datasets

## 🏆 Key Achievements

### State-of-the-Art Results
- **OpenLane-V2**: Best performance in centerline detection and topology reasoning
- **OpenLane-V1**: Superior results in 3D lane detection
- **Multi-Modal Fusion**: First comprehensive evaluation of sensor fusion for road topology understanding

### Novel Technical Contributions
- **Bezier Deformable Attention (BDA)**: Novel attention mechanism using Bezier control points
- **Multi-Point Deformable Attention (MPDA)**: First integration into Bezier keypoint-dependent decoders
- **Instance Mask Formulation**: Auxiliary loss strategy for enhanced performance
- **One-to-Many Set Prediction**: Comprehensive analysis for road topology understanding

## 📊 Key Features

### Method Components
- **BDA Architecture**: Bezier control point-driven attention mechanism
- **Transformer Decoder**: Enhanced with deformable attention for polyline structures
- **Multi-Modal Fusion**: Integration of camera, LiDAR, radar, and SDMap data
- **Instance Queries**: Efficient sparse query approach for centerline prediction

### Experimental Analysis
- Comprehensive ablation studies on attention mechanisms
- Instance mask formulation impact analysis
- Multi-modal sensor fusion evaluation
- State-of-the-art comparison on multiple benchmarks

## 🖼️ Visualizations

The project includes detailed visualizations of:
- TopoBDA architecture and BDA layers
- Attention mechanism comparisons (SPDA vs MPDA vs BDA)
- Multi-modal sensor fusion strategies
- Experimental results and performance tables
- Dataset samples from OpenLane-V1 and OpenLane-V2

All figures are available in the `/images/` directory and embedded in the project page.

## 👥 Authors

- **Muhammet Esat Kalfaoglu** (Corresponding Author)  
  *Middle East Technical University & Togg/Trutek AI Team*  
  � esat.kalfaoglu@metu.edu.tr

- **Halil Ibrahim Ozturk**  
  *Togg/Trutek AI Team*  
  📧 ibrahim.ozturk@togg.com.tr

- **Ozsel Kilinc**  
  *Togg/Trutek AI Team*  
  📧 ozsel.kilinc@togg.com.tr

- **Alptekin Temizel**  
  *Middle East Technical University*  
  📧 atemizel@metu.edu.tr

## �🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design and animations
- **Deployment**: GitHub Pages
- **Features**: 
  - Responsive design for all devices
  - PDF embedding for research figures
  - Interactive performance tables
  - Smooth scrolling navigation
  - Copy-to-clipboard citation
  - Progressive loading animations

## 📁 Repository Structure

```
TopoBDA.github.io/
├── index.html              # Main project page with comprehensive sections
├── style.css               # Enhanced responsive styling
├── script.js               # Interactive functionality and animations
├── TopoBDA_neurocomputing.pdf  # Research paper
├── _config.yml             # GitHub Pages configuration
├── images/                 # Research figures and diagrams
│   ├── topoBDA.pdf         # Architecture overview
│   ├── attention_types.pdf # Attention mechanism comparison
│   ├── BDA_layers.pdf      # BDA architecture details
│   ├── spda_vs_mpda.pdf    # SPDA vs MPDA analysis
│   ├── sensor_fusion.pdf   # Multi-modal fusion strategy
│   ├── dataset.pdf         # Dataset visualization
│   ├── bev_samples.pdf     # BEV domain samples
│   ├── all_views_pv_samples.pdf # Multi-view samples
│   ├── msda_vs_bda.pdf     # MSDA vs BDA comparison
│   ├── clsd_fuse_analysis.pdf  # Closed-loop fusion analysis
│   └── mask_head.pdf       # Instance mask architecture
├── tex_files/              # LaTeX source files
│   ├── main.tex            # Main document
│   ├── introduction.tex    # Introduction section
│   ├── methodology.tex     # Methodology section
│   ├── experiments.tex     # Experimental evaluation
│   ├── conclusions.tex     # Conclusions
│   ├── related_work.tex    # Related work section
│   └── supplementary.tex   # Supplementary material
└── README.md               # This file
```

## 🚀 Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/artest08/TopoBDA.github.io.git
   cd TopoBDA.github.io
   ```

2. Open `index.html` in your web browser or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` to view the project page.

## 🌐 Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the main branch. The live site is available at: [https://artest08.github.io/TopoBDA.github.io/](https://artest08.github.io/TopoBDA.github.io/)

## 📱 Responsive Design

The project page is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px-1199px)
- Mobile devices (< 768px)
- Print media

## ♿ Accessibility

The project includes accessibility features:
- Semantic HTML structure
- Keyboard navigation support (Alt+1-5 for sections)
- High contrast ratios
- Alternative text for images
- Reduced motion support
- Screen reader friendly tables

## 🔧 Browser Support

The project supports all modern browsers:
- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## 📊 Performance Tables

The site includes interactive performance tables showing:
- Instance mask formulation impact
- Attention mechanism comparisons
- Multi-modal sensor fusion results
- State-of-the-art benchmark comparisons

## 📝 Citation

If you use this work in your research, please cite:

```bibtex
@article{kalfaoglu2025topobda,
    title={TopoBDA: Towards Bezier Deformable Attention for Road Topology Understanding},
    author={Kalfaoglu, Muhammet Esat and Ozturk, Halil Ibrahim and Kilinc, Ozsel and Temizel, Alptekin},
    journal={Neurocomputing},
    year={2025},
    publisher={Elsevier}
}
```

## 🏷️ Keywords

Road Topology Understanding • Centerline Detection • Autonomous Driving • Automated HDMap Generation • 3D Lane Detection • Bezier Deformable Attention • Multi-Modal Fusion

## 📧 Contact

For questions about the research or this project page, please contact:
- **Muhammet Esat Kalfaoglu**: esat.kalfaoglu@metu.edu.tr
- Or [open an issue](https://github.com/artest08/TopoBDA.github.io/issues) on GitHub

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>TopoBDA: Advancing Road Topology Understanding through Bezier Deformable Attention</strong><br>
  <em>Middle East Technical University • Togg/Trutek AI Team</em>
</p>
