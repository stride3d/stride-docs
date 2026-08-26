/*
SDSL language highlighter
Based on HLSL highlighter by Stef Levesque
Link: https://github.com/highlightjs/highlightjs-hlsl/blob/master/src/languages/hlsl.js
*/

const SDSL_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?([hHfFlL]?)|\\.\\d+)([eE][-+]?\\d+)?([hHfFlL]?))'; // 0x..., 0..., decimal, float, half, double

const SDSL_NUMBER_MODE = {
  className: 'number',
  begin: SDSL_NUMBER_RE,
  relevance: 0
};

export default function(hljs) {

  let matrixBases =
    'bool double float half int uint ';

  let matrixSuffixes = [
    '',
    '1', '2', '3', '4',
    '1x1', '1x2', '1x3', '1x4',
    '2x1', '2x2', '2x3', '2x4',
    '3x1', '3x2', '3x3', '3x4',
    '4x1', '4x2', '4x3', '4x4'];

  let matrixTypes = [];

  for (let base of matrixBases.split(' ')) {
    for (let suffix of matrixSuffixes) {
      matrixTypes.push(base + suffix);
    }
  }

  let semanticsSV =
    'SV_Coverage SV_Depth SV_DispatchThreadID SV_DomainLocation ' +
    'SV_GroupID SV_GroupIndex SV_GroupThreadID SV_GSInstanceID SV_InnerCoverage SV_InsideTessFactor ' +
    'SV_InstanceID SV_IsFrontFace SV_OutputControlPointID SV_Position SV_PrimitiveID ' +
    'SV_RenderTargetArrayIndex SV_SampleIndex SV_StencilRef SV_TessFactor SV_VertexID ' +
    'SV_ViewportArrayIndex, SV_ShadingRate';

  let semanticsNum =
    'BINORMAL BLENDINDICES BLENDWEIGHT COLOR NORMAL POSITION PSIZE TANGENT TEXCOORD TESSFACTOR DEPTH ' +
    'SV_ClipDistance SV_CullDistance SV_DepthGreaterEqual SV_DepthLessEqual SV_Target ' +
    'SV_CLIPDISTANCE SV_CULLDISTANCE SV_DEPTHGREATEREQUAL SV_DEPTHLESSEQUAL SV_TARGET';

  let semanticsTypes = semanticsNum.split(' ');

  for (let s of semanticsNum.split(' ')) {
    for (let n of Array(16).keys()) {
      semanticsTypes.push(s + n.toString())
    }
  }

  return {
    name: 'SDSL',
    keywords: {
      keyword:
        'abstract asm break case cbuffer centroid child class clone column_major compile compose const continue default discard do effect else enum extern false for foreach groupshared if in inline inout interface internal line lineadj linear macro matrix mixin namespace nointerpolation noperspective operator out override packoffset params partial pass patchstream point precise register remove return rgroup row_major sample sampler sampler_state sampler1D sampler2D sampler3D samplerCUBE shader shared snorm stage static stream string string struct switch tbuffer technique technique10 technique11 texture texture1D texture1DArray texture2D texture2DArray texture3D textureCube triangle triangleadj true typedef uniform unorm unsigned using var vector void volatile while',

      type:
        // Data Types
        matrixTypes.join(' ') + 'LineStream, LinkType, MemberName, Output, InputPatch, OutputPatch, Pass, PointStream, BlendState, RasterizerState, DepthStencilState, SamplerComparisonState, SamplerState, RWTexture1D, RWTexture1DArray, RWTexture2D, RWTexture2DArray, RWTexture3D, Semantic, StreamOutputObject , Streams, Buffer, RWBuffer, ByteAddressBuffer, RWByteAddressBuffer, StructuredBuffer, RWStructuredBuffer, AppendStructuredBuffer, ConsumeStructuredBuffer, Technique, Technique10, Technique11, Texture1D , Texture1DArray, Texture2D, Texture2DArray, Texture2DMS, Texture2DMSArray, Texture3D, TextureCube, TriangleStream Constants, Input, Input2',

      built_in:
        // Semantics
        'POSITIONT FOG PSIZE VFACE VPOS ' +
        semanticsTypes.join(' ') + ' ' +
        semanticsSV + ' ' +
        semanticsSV.toUpperCase() + ' ' +

        // Functions
        'abort abs acos all AllMemoryBarrier AllMemoryBarrierWithGroupSync any asdouble asfloat asin asint asuint atan atan2 ceil CheckAccessFullyMapped clamp clip cos cosh countbits cross D3DCOLORtoUBYTE4 ddx ddx_coarse ' +
        'ddx_fine ddy ddy_coarse ddy_fine degrees determinant DeviceMemoryBarrier DeviceMemoryBarrierWithGroupSync distance dot dst errorf EvaluateAttributeAtCentroid EvaluateAttributeAtSample EvaluateAttributeSnapped exp exp2 f16tof32 f32tof16 faceforward firstbithigh firstbitlow floor fma fmod frac frexp fwidth GetRenderTargetSampleCount GetRenderTargetSamplePosition GroupMemoryBarrier GroupMemoryBarrierWithGroupSync InterlockedAdd InterlockedAnd InterlockedCompareExchange InterlockedCompareStore InterlockedExchange InterlockedMax InterlockedMin InterlockedOr InterlockedXor isfinite isinf isnan ldexp length lerp lit log log10 log2 mad max min modf msad4 mul noise normalize pow printf Process2DQuadTessFactorsAvg Process2DQuadTessFactorsMax Process2DQuadTessFactorsMin ProcessIsolineTessFactors ProcessQuadTessFactorsAvg ProcessQuadTessFactorsMax ProcessQuadTessFactorsMin ProcessTriTessFactorsAvg ProcessTriTessFactorsMax ProcessTriTessFactorsMin radians rcp reflect refract reversebits round rsqrt saturate sign sin sincos sinh smoothstep sqrt step tan tanh tex1D tex1Dbias tex1Dgrad tex1Dlod tex1Dproj tex2D tex2Dbias tex2Dgrad tex2Dlod tex2Dproj tex3D tex3Dbias tex3Dgrad tex3Dlod tex3Dproj texCUBE texCUBEbias texCUBEgrad texCUBElod texCUBEproj transpose trunc',

      literal: 'true false'
    },
    illegal: '"',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      SDSL_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#', end: '$'
      }
    ]
  };
}
